# Exercises

## 1. Review the following terms.
- Relation
- Relation schema
- Relation instance
- Tuple
- Attribute
- Domain
- Superkey
- Candidate key
- Primary key
- Foreign key

**Answers:**
Review the slides or the textbook (Chapter 2).

## 2. Review the following relational-algebra operations.
- Select σ
- Project Π
- Cartesian product ×
- Join ⋈
- Union ∪
- Set difference −
- Set intersection ∩
- Rename ρ

**Answers:**
Review the slides or the textbook (Chapter 2).

## 3. Consider the employee database. What are the appropriate primary keys?
- Employee (ID, person_name, street, city)
- Works (ID, person_name, company_name, salary)
- Company (company_name, city)

**Answers:**
- Employee (ID, person_name, street, city)
- Works (ID, company_name, salary)
- Company (company_name, city)

## 4. In the instance of instructor (Page 5 of the slides), no two instructors have the same name. From this, can we conclude that name can be used as a superkey (or primary key) of instructor?

**Answers:**
No. For this possible instance of the instructor table the names are unique, but in general this may not always be the case (unless the university has a rule that two instructors cannot have the same name, which is a rather unlikely scenario).

## 5. Consider the course relation: course(course_id, title, dept_name, credits), assume {course_id} and {title, dept_name} can uniquely identify a tuple in the relation. Which of the followings are the superkeys, and which are the candidate keys?
- a. {course_id}
- b. {title}
- c. {dept_name}
- d. {credits}
- e. {course_id, title}
- f. {course_id, dept_name}
- g. {course_id, credits}
- h. {course_id, title, dept_name}
- i. {title, dept_name}
- j. {title, credits}
- k. {dept_name, credits}
- l. {title, dept_name, credits}
- m. {course_id, title, dept_name, credits}

**Answers:**
- Superkeys: a, e, f, g, h, i, l, m
- Candidate keys: a, i

## 6. Consider the employee database of 3. Give an expression in the relational algebra to express each of the following queries:
- a. Find the name of each employee who lives in city “Miami”.
- b. Find the name of each employee whose salary is greater than $100000.
- c. Find the name of each employee who lives in “Miami” and whose salary is greater than $100000.
- d. Find the ID and name of each employee who does not work for “BigBank”.

**Answers:**
- a. Π_person_name (σ_city="Miami"(employee))
- b. Π_person_name (σ_salary>100000(employee ⋈ employee.ID=works.ID works))
- c. Π_person_name (σ_city="Miami" ∧ salary>100000(employee ⋈ employee.ID = works.ID works))
- d. To find employees who do not work for BigBank, we first find all those who do work for BigBank. Those are exactly the employees not part of the desired result. We then use set difference to find the set of all employees minus those employees that should not be in the result.
  Π_ID, person_name (employee) - Π_ID, person_name (employee ⋈ employee.ID=works.ID(σ_company_name="BigBank"(works)))
