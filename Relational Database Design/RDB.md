# Relational Database Design

## Motivation

- **A good design prevents problems that occur later during usage**: Proper database design helps avoid issues such as data anomalies, inefficiencies, and maintenance difficulties.
- **Changing a database schema before it is in use is much cheaper**: Modifying the design during the planning phase is less costly and disruptive than making changes after the database is operational.
- **Redundancy is the source of many problems and should be avoided by meeting certain design criteria**: Redundant data can lead to inconsistencies and increased storage costs. Following design principles like normalization helps minimize redundancy.

## Learning Goals

- **Understand the concepts of functional dependencies and normal forms**: Learn the foundational concepts that underpin relational database design, including how attributes relate to each other and how to structure tables to meet specific criteria.
- **Describe the quality of a design by using normal forms**: Gain the ability to evaluate database designs based on normal forms, which are standards for organizing data to reduce redundancy and improve integrity.
- **Improve a database design by decomposition of relations**: Develop skills to refine and optimize database schemas by breaking down tables into smaller, more manageable pieces that meet normal form criteria.

## Notes on Relational Database Design

### Functional Dependencies

- **Definition**: A functional dependency occurs when one attribute uniquely determines another attribute. For example, in a table of employees, `EmployeeID` might uniquely determine `EmployeeName`.
- **Notation**: Functional dependencies are often written as `A -> B`, meaning attribute `A` determines attribute `B`.

### Normal Forms

- **First Normal Form (1NF)**: Ensures that the table has a primary key and that all attributes contain only atomic (indivisible) values.
- **Second Normal Form (2NF)**: Achieved when the table is in 1NF and all non-key attributes are fully functionally dependent on the primary key.
- **Third Normal Form (3NF)**: Achieved when the table is in 2NF and all attributes are only dependent on the primary key, not on other non-key attributes.
- **Boyce-Codd Normal Form (BCNF)**: A stricter version of 3NF where every determinant is a candidate key.

### Example

Consider a table with the following attributes: `OrderID`, `CustomerID`, `CustomerName`, `ProductID`, `ProductName`, `Quantity`.

- **Functional Dependencies**:
  - `OrderID -> CustomerID, CustomerName`
  - `ProductID -> ProductName`

### Decomposition

To achieve 3NF, we can decompose the table into:

- **Orders**: `OrderID`, `CustomerID`, `CustomerName`
- **OrderDetails**: `OrderID`, `ProductID`, `Quantity`
- **Products**: `ProductID`, `ProductName`

### Best Practices

- **Identify and eliminate redundancy**: Use normalization to ensure that each piece of data is stored only once.
- **Ensure data integrity**: Design tables and relationships to maintain data accuracy and consistency.
- **Optimize for performance**: Balance normalization with practical performance considerations, such as query efficiency.
