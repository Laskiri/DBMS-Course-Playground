# Concurrency Control and Recovery System

## Motivation

- **Exclusive access on a database used by multiple users comes at the expense of throughput and runtime**: Ensuring that only one user can access data at a time can significantly reduce system performance.
- **Communicating to the user that a transaction was successful without guaranteeing that the effect is permanent can easily become expensive for commercial applications**: It is crucial to ensure that once a transaction is reported as successful, its effects are durable and permanent.
- **We want to preserve consistency and availability even in the case of failures**: Maintaining data consistency and availability is essential, even when the system encounters failures.

## Learning Goals

- **Understand and use lock-based concurrency control**: Learn how to manage concurrent access to the database using locks.
- **Understand and use two-phase locking**: Gain knowledge of the two-phase locking protocol, which ensures serializability in concurrent transactions.
- **Understanding basic logging algorithms**: Learn the principles of logging to ensure data recovery in case of failures.
- **Understanding the importance of atomicity and durability**: Understand the significance of ensuring that transactions are atomic and durable.

## Notes on Concurrency Control and Recovery System

### Lock-Based Concurrency Control

- **Locks**: Mechanisms that prevent multiple transactions from accessing the same data concurrently in conflicting ways.
  - **Shared Lock (S)**: Allows multiple transactions to read a data item but not modify it.
  - **Exclusive Lock (X)**: Allows a transaction to both read and modify a data item, preventing other transactions from accessing it.

### Two-Phase Locking (2PL)

- **Definition**: A concurrency control method that ensures serializability by dividing the execution of a transaction into two phases:
  - **Growing Phase**: The transaction acquires all the locks it needs but cannot release any locks.
  - **Shrinking Phase**: The transaction releases its locks but cannot acquire any new locks.
- **Importance**: Ensures that once a transaction starts releasing locks, it cannot acquire any new locks, preventing deadlocks and ensuring serializability.

### Basic Logging Algorithms

- **Write-Ahead Logging (WAL)**: Ensures that all changes are logged before they are applied to the database. This allows the system to recover to a consistent state in case of a failure.
- **Undo Logging**: Records the old value of a data item before it is modified, allowing the system to undo changes if a transaction fails.
- **Redo Logging**: Records the new value of a data item after it is modified, allowing the system to redo changes if a transaction was not fully applied before a failure.

### Importance of Atomicity and Durability

- **Atomicity**: Ensures that all operations within a transaction are completed successfully. If any operation fails, the entire transaction is rolled back.
- **Durability**: Ensures that once a transaction is committed, its changes are permanent, even in the event of a system failure.

### Example

Consider a transaction that transfers money between two bank accounts:

1. **Begin Transaction**
2. **Read Account A**
3. **Subtract Amount from Account A**
4. **Write Account A**
5. **Read Account B**
6. **Add Amount to Account B**
7. **Write Account B**
8. **Commit Transaction**

- **Lock-Based Control**: Acquire exclusive locks on both Account A and Account B before making changes.
- **Two-Phase Locking**: Acquire all necessary locks during the growing phase and release them during the shrinking phase.
- **Logging**: Use write-ahead logging to record changes before applying them to ensure recoverability.

### Best Practices

- **Use appropriate locking mechanisms**: Choose the right type of locks to balance concurrency and performance.
- **Implement two-phase locking**: Ensure serializability and prevent deadlocks by following the two-phase locking protocol.
- **Maintain comprehensive logs**: Use logging to ensure data can be recovered in case of failures.
- **Ensure atomicity and durability**: Design transactions to be atomic and durable to maintain data integrity and consistency.
