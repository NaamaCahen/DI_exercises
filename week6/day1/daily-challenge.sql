SELECT COUNT(actor_id)
FROM actors;
INSERT INTO actors (first_name,last_name)
VALUES('nono','taviovitz');
-- the outcome:
-- ERROR:  null value in column "age" of relation "actors" violates not-null constraint
-- DETAIL:  Failing row contains (7, nono, taviovitz, null, null).
-- SQL state: 23502