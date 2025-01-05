# Transactions

## Motivation

- **Transaction boundaries are an important part of system design**: Properly defining transaction boundaries ensures data consistency and integrity.
- **Users think in transactions**: Users typically perform operations in logical units of work, which are best represented as transactions.
- **Simple to handle multiple users**: Transactions help manage concurrent access to the database, ensuring that multiple users can work without interfering with each other.

## Learning Goals

- **Understanding the transaction concept**: Learn what transactions are and why they are important in database systems.
- **Understanding the ACID properties**: Gain knowledge of the four key properties of transactions: Atomicity, Consistency, Isolation, and Durability.
- **Understanding serializability**: Understand the concept of serializability, which ensures that the outcome of executing transactions concurrently is the same as if they were executed serially.
- **Understanding the schedule concept**: Learn about different types of schedules and how they affect transaction execution.
- **Understanding recoverable and cascadeless schedules**: Understand the importance of recoverable and cascadeless schedules in maintaining data integrity.

## Notes on Transactions

### Transaction Concept

- **Definition**: A transaction is a sequence of one or more SQL operations treated as a single unit of work. It is either fully completed or fully aborted.
- **Example**: Transferring money between bank accounts involves multiple operations (debit from one account, credit to another) that must all succeed or fail together.

### ACID Properties

- **Atomicity**: Ensures that all operations within a transaction are completed successfully. If any operation fails, the entire transaction is rolled back.
- **Consistency**: Ensures that a transaction brings the database from one valid state to another, maintaining database invariants.
- **Isolation**: Ensures that the operations of a transaction are isolated from other transactions, preventing concurrent transactions from interfering with each other.
- **Durability**: Ensures that once a transaction is committed, its changes are permanent, even in the event of a system failure.

### Serializability

- **Definition**: A schedule (sequence of operations) is serializable if its outcome is equivalent to the outcome of executing the transactions serially, one after the other.
- **Importance**: Ensures that concurrent transactions do not lead to inconsistent database states.

### Schedule Concept

- **Types of Schedules**:
  - **Serial Schedule**: Transactions are executed one after the other without overlapping.
  - **Concurrent Schedule**: Transactions are executed concurrently, with operations interleaved.
- **Conflict Serializability**: A concurrent schedule is conflict-serializable if it can be transformed into a serial schedule by swapping non-conflicting operations.

### Recoverable and Cascadeless Schedules

- **Recoverable Schedule**: A schedule is recoverable if, whenever a transaction reads data written by another transaction, the writer transaction commits before the reader transaction.
- **Cascadeless Schedule**: A schedule is cascadeless if it avoids cascading aborts, meaning that a transaction does not read data from a transaction that might be aborted.

### Example

Consider two transactions, T1 and T2:

- **T1**: Read(A), Write(A), Read(B), Write(B)
- **T2**: Read(B), Write(B), Read(A), Write(A)

- **Serial Schedule**: T1 followed by T2 or T2 followed by T1.
- **Concurrent Schedule**: Interleaved operations of T1 and T2.

### Best Practices

- **Define clear transaction boundaries**: Ensure that each transaction represents a complete unit of work.
- **Use appropriate isolation levels**: Balance the need for isolation with performance considerations.
- **Monitor and tune transaction performance**: Regularly analyze transaction performance and adjust as needed to maintain optimal performance.
