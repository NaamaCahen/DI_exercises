-- Create 2 tables : Customer and Customer profile. They have a One to One relationship.

-- A customer can have only one profile, and a profile belongs to only one customer
-- The Customer table should have the columns : id, first_name, last_name NOT NULL
-- The Customer profile table should have the columns : id, isLoggedIn DEFAULT false (a Boolean), customer_id (a reference to the Customer table)
CREATE TABLE customer(
	customer_id SERIAL PRIMARY KEY,
	first_name VARCHAR (40),
	last_name VARCHAR(50) NOT NULL
	
)
CREATE TABLE customer_profile(
	profile_id SERIAL PRIMARY KEY,
	isLoggedIn BOOLEAN DEFAULT false,
	customer_id INTEGER UNIQUE REFERENCES customer (customer_id) ON DELETE CASCADE
)
INSERT INTO customer(first_name,last_name)
VALUES('John', 'Doe'),('Jerome', 'Lalu'),('Lea', 'Rive');

-- Insert those customers

-- John, Doe
-- Jerome, Lalu
-- Lea, Rive
-- Insert those customer profiles, use subqueries

-- John is loggedIn
-- Jerome is not logged in
INSERT INTO customer_profile(isLoggedIn,customer_id)
VALUES('true',(SELECT customer_id FROM customer WHERE first_name='John')),('false',(SELECT customer_id FROM customer WHERE first_name='Jerome'));
SELECT* FROM customer_profile;
-- Use the relevant types of Joins to display:

-- The first_name of the LoggedIn customers
-- All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.
-- The number of customers that are not LoggedIn
SELECT first_name FROM customer JOIN customer_profile ON customer.customer_id=customer_profile.customer_id WHERE customer_profile.isLoggedIn=true;
SELECT first_name,isLoggedIn FROM customer JOIN customer_profile ON customer.customer_id=customer_profile.customer_id ;
SELECT count(*) AS notLoggedIn FROM customer_profile WHERE isLoggedIn=false;