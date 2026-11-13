from database import get_connection

print("Testing Supabase connection...", flush=True)

try:
    connection = get_connection()
    print("Supabase Connected Successfully!")

    cursor = connection.cursor()
    cursor.execute("""
        SELECT table_name
        FROM information_schema.tables
        WHERE table_schema = 'public'
    """)

    print("Available Tables:", cursor.fetchall())

    cursor.close()
    connection.close()

except Exception as e:
    print("Database Connection Error:", e)