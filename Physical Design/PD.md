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

### B-Tree Index

B-trees are a widely used indexing structure in databases due to their balanced nature and efficient performance for a variety of operations. Here are some key points about B-trees:

#### Structure of B-Trees

- **Balanced Tree**: B-trees are balanced tree structures where all leaf nodes are at the same depth. This ensures that the time complexity for search, insert, and delete operations is logarithmic.
- **Nodes**: Each node in a B-tree contains multiple keys and child pointers. The keys within a node are stored in sorted order.
- **Degree (Order)**: The degree (or order) of a B-tree defines the minimum and maximum number of keys a node can have. For a B-tree of order `m`:
  - Each internal node can have at most `m` children and at least `ceil(m/2)` children.
  - Each node (except the root) can have at most `m-1` keys and at least `ceil(m/2)-1` keys.
  - The root node can have at most `m-1` keys and at least 1 key.

#### Operations on B-Trees

- **Search**: Searching in a B-tree involves traversing from the root to the leaf nodes, following the child pointers based on the comparison of keys. The search operation has a time complexity of `O(log n)`.
- **Insertion**: Inserting a key into a B-tree involves finding the appropriate leaf node and inserting the key in sorted order. If the node overflows (i.e., exceeds the maximum number of keys), it is split into two nodes, and the middle key is promoted to the parent node. This process may propagate up to the root.
- **Deletion**: Deleting a key from a B-tree involves finding the key and removing it. If the node underflows (i.e., has fewer than the minimum number of keys), it may borrow a key from a sibling or merge with a sibling. This process may propagate up to the root.

#### Advantages of B-Trees

- **Efficient Disk Access**: B-trees are designed to minimize disk I/O operations. Each node can hold multiple keys, reducing the height of the tree and the number of disk accesses required for operations.
- **Balanced Structure**: The balanced nature of B-trees ensures that all leaf nodes are at the same depth, providing consistent performance for search, insert, and delete operations.
- **Range Queries**: B-trees support efficient range queries, as the keys are stored in sorted order. This allows for quick retrieval of all keys within a specified range.

#### Variants of B-Trees

- **B+ Trees**: A variant of B-trees where all keys are stored in the leaf nodes, and internal nodes only store keys to guide the search. B+ trees often include linked lists connecting the leaf nodes, making range queries even more efficient.
- **B* Trees**: A variant of B-trees that aims to reduce the number of splits and merges by redistributing keys between nodes more aggressively.

### Example of B-Tree Operations

Consider a B-tree of order 3 (i.e., each node can have at most 2 keys and 3 children):

1. **Insertion**:
   - Insert keys 10, 20, 5, 6, 12, 30, 7, 17.
   - The tree will split nodes as necessary to maintain the B-tree properties.

2. **Search**:
   - Search for key 12.
   - Traverse the tree from the root to the leaf nodes, following the child pointers based on key comparisons.

3. **Deletion**:
   - Delete key 6.
   - Remove the key and adjust the tree structure to maintain the B-tree properties.

### Best Practices for Using B-Trees

- **Choose an appropriate order**: The order of the B-tree should be chosen based on the size of the keys and the block size of the storage medium to optimize disk I/O operations.
- **Monitor and maintain B-trees**: Regularly update statistics and rebuild B-trees as needed to ensure optimal performance.
- **Balance read and write performance**: Consider the impact of B-trees on both query and update operations to achieve the best overall performance.

By understanding and leveraging the properties of B-trees, you can design efficient indexing strategies that improve the performance of database operations.