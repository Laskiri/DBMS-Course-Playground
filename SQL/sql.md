# SQL

## Motivation

SQL (Structured Query Language) is essential for interacting with relational databases. Here are the key motivations:

- **SQL is the Query Language**: SQL is the standard language used to query and manipulate data in relational databases. It allows users to perform a wide range of operations, from simple data retrieval to complex transactions.
- **SQL is Very Widely Used**: SQL is ubiquitous in the industry, used by developers, data analysts, and database administrators. Its widespread adoption makes it a valuable skill for anyone working with data.
- **SQL is Well Supported by Relational Database Systems**: Almost all relational database management systems (RDBMS) support SQL, making it a versatile and powerful tool for managing data across different platforms.

## Learning Goals

By the end of this section, you should be able to:

- **Explain and Use the SQL Data Model**: Understand the structure of SQL databases, including tables, columns, rows, and relationships. Use SQL to define and manipulate these structures.
- **Create Non-Trivial Database Tables**: Design and create complex database tables with appropriate data types, constraints, and relationships.
- **Modify Non-Trivial Database Tables**: Perform advanced modifications on database tables, including altering table structures, updating data, and managing constraints.
- **Create Non-Trivial SQL Statements**: Write complex SQL queries and statements to retrieve, insert, update, and delete data. Use advanced SQL features such as joins, subqueries, and set operations.

## Notes

### SQL Data Model

- **Tables**: The primary structure in SQL, consisting of rows and columns.
- **Columns**: Define the data types and constraints for the data stored in a table.
- **Rows**: Individual records in a table.
- **Relationships**: Define how tables are related to each other, typically using foreign keys.

### Creating Database Tables

- **CREATE TABLE**: Define a new table with columns and constraints.
- **Data Types**: Specify the type of data each column can hold (e.g., INTEGER, VARCHAR, DATE).
- **Constraints**: Define rules for data integrity (e.g., PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL).

### Modifying Database Tables

- **ALTER TABLE**: Modify the structure of an existing table (e.g., add/drop columns, change data types).
- **UPDATE**: Modify existing data in a table.
- **DELETE**: Remove data from a table.
- **Constraints Management**: Add or drop constraints to enforce data integrity.

### Creating SQL Statements

- **SELECT**: Retrieve data from one or more tables.
- **INSERT**: Add new data to a table.
- **UPDATE**: Modify existing data in a table.
- **DELETE**: Remove data from a table.
- **Joins**: Combine data from multiple tables based on related columns.
  - **INNER JOIN**: Retrieve records with matching values in both tables.
  - **LEFT JOIN**: Retrieve all records from the left table and matching records from the right table.
  - **RIGHT JOIN**: Retrieve all records from the right table and matching records from the left table.
  - **FULL JOIN**: Retrieve all records when there is a match in either table.
- **Subqueries**: Nested queries used within a main query.
- **Set Operations**: Combine results of two or more queries (e.g., UNION, INTERSECT, EXCEPT).

// ...additional notes can be added here...
