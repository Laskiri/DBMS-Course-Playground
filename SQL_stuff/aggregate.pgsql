/* SELECT sum(salary) as dept_salary, dept_name FROM instructor GROUP BY dept_name ORDER BY dept_salary DESC; */

SELECT dept_name, count(*) as num_instructors, max(salary) as max_salary, min(salary) as min_salary, max(salary) - min(salary) as salary_range
FROM instructor GROUP BY dept_name ORDER BY num_instructors DESC;