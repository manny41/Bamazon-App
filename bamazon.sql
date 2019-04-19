DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products(
    item_id INT AUTO_INCREMENT,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price DECIMAL(7, 2)  NOT NULL,
    stock_qty INT not null,
    PRIMARY KEY(item_id)
);

INSERT INTO products(product_name, department_name, price, stock_qty)
VALUES('Apple Watch', 'Electronics', 350, 120);

INSERT INTO products(product_name, department_name, price, stock_qty)
VALUES('Wrangler Jeans', 'Clothing', 35, 300);

INSERT INTO products(product_name, department_name, price, stock_qty)
VALUES('Mr. Clean Wipes', 'Cleaning Supplies', 15.29, 289);

INSERT INTO products(product_name, department_name, price, stock_qty)
VALUES('Dish Washer Soap', 'Cleaning Supplies', 4.99, 145);

INSERT INTO products(product_name, department_name, price, stock_qty)
VALUES('Basketball', 'Sports', 20, 130);

INSERT INTO products(product_name, department_name, price, stock_qty)
VALUES('Lipstick', 'Beauty', 7.49, 200);

INSERT INTO products(product_name, department_name, price, stock_qty)
VALUES('Mangos', 'Groceries', 0.67, 400);

INSERT INTO products(product_name, department_name, price, stock_qty)
VALUES('Cucumber', 'Groceries', 0.47, 180);

INSERT INTO products(product_name, department_name, price, stock_qty)
VALUES('Scooter', 'Toys', 300, 15);

INSERT INTO products(product_name, department_name, price, stock_qty)
VALUES('Air Force Ones', 'Shoes', 158.75, 50);