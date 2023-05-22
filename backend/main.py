from flask import Flask
import pymysql

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'  # Replace with your MySQL server hostname
app.config['MYSQL_USER'] = 'root'  # Replace with your MySQL username
app.config['MYSQL_PASSWORD'] = 'root'  # Replace with your MySQL password
app.config['MYSQL_DB'] = 'turf'  # Replace with your MySQL database name


def create_database():
    db = pymysql.connect(
        host=app.config['MYSQL_HOST'],
        user=app.config['MYSQL_USER'],
        password=app.config['MYSQL_PASSWORD']
    )
    cursor = db.cursor()
    cursor.execute(f"CREATE DATABASE IF NOT EXISTS turf")
    db.commit()
    cursor.close()
    db.close()


def get_db():
    db = pymysql.connect(
        host=app.config['MYSQL_HOST'],
        user=app.config['MYSQL_USER'],
        password=app.config['MYSQL_PASSWORD'],
        database=app.config['MYSQL_DB']
    )
    return db


def create_tables():
    db = get_db()
    cursor = db.cursor()

    # Create tables
    table_queries = [
        '''
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255),
            email VARCHAR(255)
        )
        ''',
        '''
        CREATE TABLE IF NOT EXISTS products (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255),
            price DECIMAL(10, 2)
        )
        '''
    ]

    for query in table_queries:
        cursor.execute(query)

    db.commit()
    cursor.close()
    db.close()


def insert_dummy_data():
    db = get_db()
    cursor = db.cursor()

    # Check if users table is empty
    cursor.execute('SELECT COUNT(*) FROM users')
    user_count = cursor.fetchone()[0]

    if user_count == 0:
        # Insert dummy data
        user_data = [
            ('John Doe', 'john@example.com'),
            ('Jane Smith', 'jane@example.com')
        ]
        insert_user_query = 'INSERT INTO users (name, email) VALUES (%s, %s)'
        cursor.executemany(insert_user_query, user_data)

    # Check if products table is empty
    cursor.execute('SELECT COUNT(*) FROM products')
    product_count = cursor.fetchone()[0]

    if product_count == 0:
        # Insert dummy data
        product_data = [
            ('Product 1', 10.99),
            ('Product 2', 19.99),
            ('Product 3', 5.99)
        ]
        insert_product_query = 'INSERT INTO products (name, price) VALUES (%s, %s)'
        cursor.executemany(insert_product_query, product_data)

    db.commit()
    cursor.close()
    db.close()


@app.route('/')
def index():
    db = get_db()
    cursor = db.cursor()
    cursor.execute('SELECT * FROM products')
    results = cursor.fetchall()
    print(results)
    # Process the results as needed
    cursor.close()
    db.close()
    return 'Data retrieved from MySQL'


@app.route('/users')
def get_users():
    db = get_db()
    cursor = db.cursor()
    cursor.execute('SELECT * FROM users')
    results = cursor.fetchall()
    # Process the results as needed
    cursor.close()
    db.close()
    return 'Users retrieved from MySQL'


@app.route('/products')
def get_products():
    db = get_db()
    cursor = db.cursor()
    cursor.execute('SELECT * FROM products')
    results = cursor.fetchall()
    # Process the results as needed
    cursor.close()
    db.close()
    return 'Products retrieved from MySQL'


if __name__ == '__main__':
    create_database()
    create_tables()
    insert_dummy_data()
    index()
    app.run()
