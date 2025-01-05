# Query Execution and Optimization

## Motivation

- **Understanding the basics of query processing and query optimization is the foundation of database tuning**: Efficient query execution and optimization are crucial for maintaining high performance in database systems.

## Learning Goals

- **Understand how selection statements are executed**: Learn the methods used to process and execute selection queries in a database.
- **Understand the basic join algorithms**: Gain knowledge of the fundamental algorithms used to perform join operations between tables.
- **Understand the basics of heuristic (logical) query optimization**: Learn the principles of logical query optimization, which involves transforming queries into more efficient forms.
- **Understand the basics of physical query optimization**: Understand how physical query optimization techniques improve the execution of queries by considering the physical aspects of data storage and access.

## Notes on Query Execution and Optimization

### Execution of Selection Statements

- **Table Scan**: The simplest method where the database scans the entire table to find the matching rows.
- **Index Scan**: Uses an index to quickly locate the matching rows, significantly improving performance for large datasets.

### Basic Join Algorithms

- **Nested Loop Join**: A simple but potentially slow method where for each row in the first table, the database scans the second table to find matching rows.
- **Sort-Merge Join**: Both tables are sorted on the join key, and then merged together. This can be more efficient than nested loop join for large datasets.
- **Hash Join**: Uses a hash table to partition the rows of one table, and then matches rows from the second table to the partitions. This is often the fastest join method for large datasets.

### Heuristic (Logical) Query Optimization

- **Query Rewriting**: Transforming the query into a more efficient form without changing its meaning. For example, pushing selections down the query tree to reduce the number of rows processed in joins.
- **Join Reordering**: Changing the order of join operations to minimize the size of intermediate results, which can significantly improve performance.

### Physical Query Optimization

- **Cost-Based Optimization**: The optimizer estimates the cost of different query execution plans and chooses the one with the lowest cost. Costs are typically based on factors like I/O operations, CPU usage, and memory usage.
- **Index Selection**: Choosing the most appropriate indexes to use for a query to minimize the number of disk accesses.
- **Parallel Execution**: Splitting the query into parts that can be executed in parallel, taking advantage of multiple CPU cores to speed up query processing.

### Example

Consider a query to find all orders placed by a specific customer:

```sql
SELECT * FROM Orders WHERE CustomerID = 123;
```

- **Table Scan**: The database scans the entire `Orders` table to find rows where `CustomerID` is 123.
- **Index Scan**: If there is an index on `CustomerID`, the database uses the index to quickly locate the matching rows.

### Best Practices

- **Use indexes wisely**: Create indexes on columns that are frequently used in selection and join conditions.
- **Optimize query structure**: Write queries in a way that allows the optimizer to choose the most efficient execution plan.
- **Monitor and tune performance**: Regularly analyze query performance and adjust indexes, query structure, and other factors to maintain optimal performance.
