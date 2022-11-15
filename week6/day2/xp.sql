-- ex1
SELECT * FROM items ORDER BY price ;
SELECT * FROM items WHERE price>=80 ORDER BY price  DESC;
-- The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
SELECT first_name,last_name FROM customers ORDER BY first_name LIMIT 3;
-- All last names (no other columns!), in reverse alphabetical order (Z-A)
SELECT last_name FROM customers ORDER BY last_name DESC;


