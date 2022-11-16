CREATE TABLE items(
	item_id SERIAL PRIMARY KEY,
	item_name VARCHAR(70) NOT NULL,
	price INTEGER NOT NULL
)
CREATE TABLE product_orders (
	order_id SERIAL PRIMARY KEY,
	item_one INTEGER REFERENCES items (item_id)  ON DELETE SET NULL ON UPDATE CASCADE,
	item_two INTEGER REFERENCES items (item_id)  ON DELETE SET NULL ON UPDATE CASCADE,
	item_three INTEGER REFERENCES items (item_id)  ON DELETE SET NULL ON UPDATE CASCADE,
	order_date DATE
)
INSERT INTO items(item_name,price)
VALUES('chair',100),('table',500),('bike',125),('computer',2000),('mouse',35);
INSERT INTO product_orders(item_one,item_two,item_three,order_date)
VALUES(2,2,4,'2022-11-16'),(1,2,4,'2022-11-16'),(3,2,1,'2022-11-16'),(1,3,4,'2022-11-16');

CREATE or REPLACE FUNCTION total(item1 INTEGER ,item2 INTEGER,item3 INTEGER)
RETURNS int AS $totalPrice$
DECLARE
	totalPrice integer;
BEGIN 
	totalPrice:=item1+item2+item3;
	RETURN totalPrice;
END;
$totalPrice$ LANGUAGE plpgsql ;

SELECT * FROM total((SELECT item_one FROM product_orders WHERE order_id=1) ,(SELECT item_two FROM product_orders WHERE order_id=1),(SELECT item_three FROM product_orders WHERE order_id=1)) AS sumTotal;
-- CREATE FUNCTION function_name(p1 type, p2 type)
--  RETURNS type AS $$
-- BEGIN
--  -- logic
-- END;
-- $$ LANGUAGE language_name;