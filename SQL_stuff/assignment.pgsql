
WITH q1 AS (SELECT * FROM instructor where dept_name = 'Biology'), 
q2 AS (SELECT * FROM instructor where dept_name = 'Comp. Sci.')
SELECT * FROM q1 UNION SELECT * FROM q2