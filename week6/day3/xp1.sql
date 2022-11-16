-- Get a list of all film languages.
SELECT title,name FROM film INNER JOIN language ON language.language_id=film.language_id;
-- Get a list of all films joined with their languages – select the following details : film title, description, and language name. Try your query with different joins:
-- Get all films, even if they don’t have languages.
-- Get all languages, even if there are no films in those languages.
SELECT title,description,language.name FROM film INNER JOIN language ON language.language_id=film.language_id;
SELECT title,description,name FROM film LEFT JOIN language ON language.language_id=film.language_id;
SELECT title,description,name FROM film RIGHT JOIN language ON language.language_id=film.language_id;

-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.
CREATE TABLE new_film (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) 
	
)
INSERT INTO new_film(name)VALUES('les choristes'),('les aristocats'),('moglie'),('hortone');
-- Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.
CREATE TABLE customer_review(
	review_id SERIAL PRIMARY KEY,
	film_id INTEGER REFERENCES new_film (id) ON DELETE CASCADE,
	language_id INTEGER REFERENCES language(language_id) ON DELETE SET NULL,
	title VARCHAR(100) NOT NULL,
	score INTEGER ,
	review_text TEXT ,
	last_update DATE 
)

-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
INSERT INTO customer_review(film_id,language_id,title,score,review_text,last_update)
VALUES(2,3,'first review',8,'lorem ipsum vrfwrfvwjfgwlejrtgqjnn fejr erflre werjfn2 jnrg', '2022-12-07'),
(3,1,'second review',2,'lorem ipsum qjnn fejr erflre vkvk jnrg ','2022-08-11');
-- Delete a film that has a review from the new_film table, what happens to the customer_review table?
SELECT * FROM customer_review;
DELETE FROM film WHERE film_id=2;