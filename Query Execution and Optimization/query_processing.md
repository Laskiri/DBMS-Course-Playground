# Query Processing

The DML compiler (or query optimizer) determines the optimal execution plan, which includes deciding whether to use an index scan, table scan, or range scan. The query evaluation engine then executes this plan.

To clarify, the query optimizer's role is to analyze the query and generate an efficient execution plan. This plan specifies the access methods (e.g., index scan, table scan) and join algorithms to use. The query evaluation engine follows this plan to retrieve and manipulate the data.

## Detailed Steps

### Query Parsing:

- The SQL query is parsed to create an internal representation, such as an abstract syntax tree (AST).

### Query Optimization:

- The optimizer evaluates different execution plans and selects the most efficient one. This involves:
  - Deciding whether to use an index scan, table scan, or range scan.
  - Choosing join algorithms (e.g., nested loop join, hash join).
  - Rewriting the query for better performance (e.g., pushing down predicates).

### Execution Plan:

- The optimizer generates an execution plan, which is a sequence of operations that the query evaluation engine will perform.

### Query Execution:

- The query evaluation engine executes the plan by performing the specified operations, such as index scans, joins, and aggregations.

## Example Execution Plan

Consider the following SQL query:
```sql
SELECT name, salary FROM instructor WHERE dept_name = 'Computer Science';
```

### Steps Performed by the Optimizer

#### Parsing:

- The query is parsed into an internal representation.

#### Optimization:

- The optimizer evaluates different plans:
  - **Plan A:** Use an index on `dept_name` to find rows quickly.
  - **Plan B:** Perform a full table scan if no suitable index is available.
- The optimizer selects Plan A if an index on `dept_name` exists.

#### Execution Plan:

- The optimizer generates an execution plan that specifies using an index scan on `dept_name`.

### Query Execution

The query evaluation engine executes the plan:

#### Index Scan:

- The engine uses the index on `dept_name` to locate rows where `dept_name = 'Computer Science'`.

#### Filtering:

- The engine applies the `WHERE` clause to filter rows.

#### Projection:

- The engine selects the `name` and `salary` columns.

#### Output:

- The engine returns the result set to the client application.

## Example in Sequelize

Here’s how this process works in practice using Sequelize:

```javascript
// Example Sequelize query
const instructors = await Instructor.findAll({
  attributes: ['name', 'salary'],
  where: {
    dept_name: 'Computer Science'
  }
});
```

## Conclusion

The DML compiler (query optimizer) determines the optimal execution plan, including whether to use an index scan, table scan, or range scan. The query evaluation engine then executes this plan by performing the specified operations. In ORM frameworks like Sequelize, this process is abstracted away, allowing you to focus on writing high-level queries while the underlying DBMS handles optimization and execution.