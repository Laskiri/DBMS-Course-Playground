/* SELECT * 
FROM instructor 
NATURAL JOIN teaches; */

/* SELECT * 
FROM instructor 
INNER JOIN teaches 
ON instructor.ID = teaches.instructor_id; */

SELECT * from quiz1 NATURAL JOIN (SELECT name, score as score2 from quiz2)