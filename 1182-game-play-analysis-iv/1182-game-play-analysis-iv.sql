# Write your MySQL query statement below
SELECT 
  ROUND(
    COUNT(DISTINCT a1.player_id) * 1.0 / COUNT(DISTINCT a2.player_id), 
    2
  ) AS fraction
FROM (
  SELECT player_id, MIN(event_date) AS first_login
  FROM Activity
  GROUP BY player_id
) a2
LEFT JOIN Activity a1
  ON a2.player_id = a1.player_id
  AND a1.event_date = DATE_ADD(a2.first_login, INTERVAL 1 DAY);
