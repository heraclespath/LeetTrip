# Write your MySQL query statement below
WITH Boarding AS (
  SELECT *,
         SUM(weight) OVER (ORDER BY turn) AS total_weight
  FROM Queue
)
SELECT person_name
FROM Boarding
WHERE total_weight <= 1000
ORDER BY turn DESC
LIMIT 1;
