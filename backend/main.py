
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field
from database import get_connection

app = FastAPI(title="Sandhya Portfolio API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactMessage(BaseModel):
    name: str = Field(min_length=1, max_length=100)
    email: EmailStr
    subject: str = Field(default="", max_length=200)
    message: str = Field(min_length=1, max_length=5000)

@app.get("/")
def home():
    return {"message": "Portfolio Backend is running"}

@app.post("/api/contact")
def submit_contact(data: ContactMessage):
    connection = None

    try:
        connection = get_connection()

        with connection.cursor() as cursor:
            cursor.execute(
                """
                INSERT INTO public.contact_messages
                (name, email, subject, message)
                VALUES (%s, %s, %s, %s)
                """,
                (
                    data.name.strip(),
                    str(data.email),
                    data.subject.strip(),
                    data.message.strip()
                )
            )

        connection.commit()

        return {
            "success": True,
            "message": "Your message has been received!"
        }

    except Exception as e:
        print("Database error:", e)
        raise HTTPException(
            status_code=500,
            detail="Unable to save your message."
        )

    finally:
        if connection:
            connection.close()
