/* SELECT * FROM (
    SELECT instructor.ID AS instructor_id, teaches.ID AS teaches_id, instructor.*, teaches.*
    FROM instructor 
    CROSS JOIN teaches
) where instructor_id = teaches_id; */

/* SELECT * FROM instructor CROSS JOIN teaches 
WHERE instructor.ID = teaches.ID; */

SELECT * FROM instructor join teaches on instructor.ID = teaches.ID;