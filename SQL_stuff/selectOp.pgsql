/* SELECT * FROM instructor
WHERE dept_name = 'Physics' AND salary > 80000; */
/* 
SELECT dept_name FROM instructor */

/* Consider  the query -- Find the names of all instructors in 
the Physics department. */

/* SELECT name FROM instructor WHERE dept_name = 'Physics'; */

/* SELECT name from (SELECT * FROM instructor WHERE dept_name = 'Physics'); */
/* 
Wrong
• The projection goes before the 
selection here
• Since the projection eliminates 
“dept_name’, the selection 
cannot be performed


SELECT * FROM (SELECT name from instructor) WHERE dept_name = 'Physics'; */

/* Query -- Find the IDs of all instructors whose salary is less 
than 82000. */

SELECT ID FROM instructor where salary < 82000;