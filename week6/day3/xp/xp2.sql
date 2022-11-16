-- Use UPDATE to change the language of some films. Make sure that you use valid languages.
SELECT *FROM language;
UPDATE language SET name='Hebrew' where name='German';  
-- Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
--we will have to do subqueries to fetch the different ids
-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
DROP TABLE customer_review;
-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
select count(*) as outstanding from rental WHERE return_date IS NULL;
-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
select title,rental_rate,return_date from rental 
JOIN inventory ON rental.inventory_id=inventory.inventory_id
JOIN film ON film.film_id=inventory.inventory_id
WHERE return_date IS NULL ORDER BY film.rental_rate ASC LIMIT 30;
-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
SELECT title,actor.first_name,description FROM film 
JOIN film_actor ON film.film_id=film_actor.film_id
JOIN actor ON actor.actor_id=film_actor.actor_id
WHERE  description ILIKE '%sumo wrestler%' AND actor.first_name ='Penelope' AND actor.last_name='Monroe';
SELECT * FROM film;
-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
SELECT * FROM film WHERE rating='R' AND length<60;
-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
SELECT title,(customer.first_name ,customer.last_name),return_date AS friend FROM film 
JOIN inventory ON film.film_id=inventory.film_id
JOIN rental ON inventory.inventory_id=rental.inventory_id
JOIN customer ON customer.customer_id=rental.customer_id
WHERE customer.first_name='Matthew' AND customer.last_name='Mahan' AND film.rental_rate>4 AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01';
-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.

SELECT title,description,(customer.first_name ,customer.last_name)AS friend,return_date,replacement_cost  FROM film 
JOIN inventory ON film.film_id=inventory.film_id
JOIN rental ON inventory.inventory_id=rental.inventory_id
JOIN customer ON customer.customer_id=rental.customer_id
WHERE customer.first_name='Matthew' AND customer.last_name='Mahan' AND(film.title ILIKE '%boat%' OR film.description ILIKE '%boat%' ) 
ORDER BY film.replacement_cost DESC LIMIT 1;

