# Relational Algebra and SQL Equivalent Cheatsheet

## Selection (σ)
- **Relational Algebra**: σ<sub>condition</sub>(R)
- **SQL Equivalent**: `SELECT * FROM R WHERE condition;`

## Projection (π)
- **Relational Algebra**: π<sub>attribute1, attribute2, ...</sub>(R)
- **SQL Equivalent**: `SELECT attribute1, attribute2, ... FROM R;`

## Union (∪)
- **Relational Algebra**: R ∪ S
- **SQL Equivalent**: `SELECT * FROM R UNION SELECT * FROM S;`

## Set Difference (−)
- **Relational Algebra**: R − S
- **SQL Equivalent**: `SELECT * FROM R EXCEPT SELECT * FROM S;`

## Cartesian Product (×)
- **Relational Algebra**: R × S
- **SQL Equivalent**: `SELECT * FROM R CROSS JOIN S;`

## Rename (ρ)
- **Relational Algebra**: ρ<sub>newName</sub>(R)
- **SQL Equivalent**: `SELECT * FROM R AS newName;`

## Join (⨝)
- **Relational Algebra**: R ⨝<sub>condition</sub> S
- **SQL Equivalent**: `SELECT * FROM R JOIN S ON condition;`

## Intersection (∩)
- **Relational Algebra**: R ∩ S
- **SQL Equivalent**: `SELECT * FROM R INTERSECT SELECT * FROM S;`

## Division (÷)
- **Relational Algebra**: R ÷ S
- **SQL Equivalent**: No direct equivalent, but can be achieved using nested queries and `NOT EXISTS`.

## Aggregation (γ)
- **Relational Algebra**: γ<sub>F1, F2, ...</sub>(R)
- **SQL Equivalent**: `SELECT F1(attribute), F2(attribute), ... FROM R GROUP BY attribute;`

## Assignment (←)
- **Relational Algebra**: R ← expression
- **SQL Equivalent**: `CREATE VIEW R AS expression;`

## Types of Joins
- **Inner Join**: 
  - **Relational Algebra**: R ⨝<sub>condition</sub> S
  - **SQL Equivalent**: `SELECT * FROM R JOIN S ON condition;`
- **Left Outer Join**: 
  - **Relational Algebra**: R ⟕<sub>condition</sub> S
  - **SQL Equivalent**: `SELECT * FROM R LEFT JOIN S ON condition;`
- **Right Outer Join**: 
  - **Relational Algebra**: R ⟖<sub>condition</sub> S
  - **SQL Equivalent**: `SELECT * FROM R RIGHT JOIN S ON condition;`
- **Full Outer Join**: 
  - **Relational Algebra**: R ⟗<sub>condition</sub> S
  - **SQL Equivalent**: `SELECT * FROM R FULL JOIN S ON condition;`
