-- 🌟 Basic Select Statement
-- Write a query to display the names (first_name, last_name) using an alias name “First”, “Last” from the employee table.
SELECT first_name AS FIRST , last_name AS LAST FROM employees;
-- Write a query to get unique departments ID from the employee table (ie. without duplicates).
SELECT department_id FROM employees GROUP BY department_id;
-- Write a query to get the details of all employees from the employee table, do so in descending order by first name.
SELECT * FROM employees ORDER BY first_name;
-- Write a query to get the names (first_name, last_name), salary and 15% of salary as PF (ie. alias) for all the employees.
SELECT first_name,last_name,(salary)*0.15 AS PF FROM employees;
-- Write a query to get the employee IDs, names (first_name, last_name) and salary in ascending order according to their salary.
SELECT employee_id,first_name ,last_name,salary FROM employees ORDER BY salary ASC;
-- Write a query to get the total sum of all salaries paid to the employees.
SELECT SUM(salary) FROM employees;
-- Write a query to get the maximum and minimum salaries paid to the employees.
SELECT MAX(salary) FROM employees;
SELECT MIN(salary) FROM employees;
-- Write a query to get the average salary paid to the employees.
SELECT ROUND(AVG(salary)) FROM employees;
-- Write a query to get the number of employees working in the company.
SELECT COUNT(*) FROM employees;
-- Write a query to get all the first names from the employees table in upper case.
SELECT upper(first_name) FROM employees;
-- Write a query to get the first three characters of each first name of all the employees in the employees table.
SELECT LEFT(first_name,3) FROM employees;
-- Write a query to get the full names of all the employees in the employees table. You have to include the first name and last name.
SELECT (first_name , last_name ) AS full_name FROM employees;
-- Write a query to get the first name, last name and the length of the full name of all the employees from the employees table.
SELECT (first_name , last_name ) AS full_name , (CHAR_LENGTH(first_name) + CHAR_LENGTH(last_name)) AS length FROM employees;
-- Write a query to check whether the first_name column of the employees table contains any numbers.
SELECT * FROM employees WHERE first_name ILIKE '%[0-9]%';
-- Write a query to select the first ten records from a table.
SELECT *FROM employees LIMIT 10;