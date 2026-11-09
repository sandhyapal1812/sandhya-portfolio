from database import get_connection

print("Testing MySQL connection...")

try:
    connection = get_connection()
    print("MySQL Connected Successfully!")

    cursor = connection.cursor()
    cursor.execute("SHOW TABLES")
    print("Available Tables:", cursor.fetchall())

    cursor.close()
    connection.close()

except Exception as e:
    print("MySQL Connection Error:", e)