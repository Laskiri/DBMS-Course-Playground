# Physical Design

## Motivation

- **Physical design directly impacts the performance of database operations**: The way data is stored and accessed can significantly affect the speed and efficiency of database queries and transactions.
- **Faster databases lead to better user experiences, lower operational costs, and the ability to handle larger datasets effectively**: Optimized physical design ensures that databases can scale and perform well under increasing loads.

## Learning Goals

- **Understand how tables are stored in files**: Learn the methods and structures used to store database tables on disk.
- **Understand basic indexing techniques**: Gain knowledge of indexing strategies that improve data retrieval speeds.
- **Understand the effects of storage and indexes on the performance of basic SQL queries**: Learn how different storage and indexing choices impact the execution time and efficiency of SQL queries.

## Notes on Physical Design

### Storage of Tables

- **Heap Files**: Tables are stored as unordered collections of records. This is the simplest form of storage but can be inefficient for large datasets.
- **Sorted Files**: Records are stored in a sorted order based on one or more attributes. This can improve search performance but may require additional maintenance for inserts and updates.
- **Clustered Files**: Records that are frequently accessed together are stored close to each other on disk, reducing the number of disk accesses required for queries.

### Indexing Techniques

- **Primary Index**: An index on a primary key, which uniquely identifies each record in a table. This index is usually clustered.
- **Secondary Index**: An index on non-primary key attributes. These indexes can be non-clustered and are used to speed up queries that filter or sort by these attributes.
- **B-Tree Index**: A balanced tree structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time.
- **Hash Index**: Uses a hash function to map search keys to locations in the index. This provides very fast access for equality searches but is less efficient for range queries.

### Effects of Storage and Indexes on SQL Performance

- **Query Performance**: Proper indexing can significantly reduce the time required to execute queries by minimizing the number of disk accesses.
- **Insert, Update, and Delete Performance**: While indexes improve read performance, they can add overhead to write operations. It's important to balance the number and type of indexes to optimize overall performance.
- **Storage Overhead**: Indexes consume additional disk space. The trade-off between storage cost and query performance must be considered.

### Example

Consider a table `Employees` with attributes `EmployeeID`, `Name`, `Department`, and `Salary`.

- **Primary Index**: An index on `EmployeeID` to quickly locate employee records.
- **Secondary Index**: An index on `Department` to efficiently retrieve all employees in a specific department.

### Best Practices

- **Choose the right type of index**: Use primary indexes for unique identifiers and secondary indexes for frequently queried attributes.
- **Monitor and maintain indexes**: Regularly update statistics and rebuild indexes as needed to ensure optimal performance.
- **Balance read and write performance**: Consider the impact of indexes on both query and update operations to achieve the best overall performance.
