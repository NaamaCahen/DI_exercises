-- 1.
CREATE TABLE items(
	item_id SERIAL PRIMARY KEY,
	description VARCHAR(100),
	price INTEGER 
)
INSERT INTO items(description,price)
VALUES ('small desk',100);
SELECT * FROM items
INSERT INTO items(description,price)
VALUES ('large desk',300),
('Fan',80);
-- 2.
CREATE TABLE customers(
	customer_id SERIAL PRIMARY KEY,
	first_name VARCHAR(100) NOT NULL,
	last_name VARCHAR(100) NOT NULL
) 
INSERT INTO customers(first_name,last_name)
VALUES('Greg','Jones'),
('Sandra' ,'Jones'),
('Scott' , 'Scott'),
('Trevor' ,'Green'),
('Melanie','Johnson');


-- 3.
SELECT * FROM items;
SELECT * FROM items WHERE price>80;
SELECT * FROM items WHERE price<=300;
SELECT * FROM customers WHERE last_name='Smith';
SELECT * FROM customers WHERE last_name='Jones';
SELECT * FROM customers WHERE first_name!='Scott';
