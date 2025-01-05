/* Example of Transaction Management in SQL
In this example, the transaction ensures that money is transferred from one account to another atomically. If any operation fails, the entire transaction can be rolled back to maintain consistency. */

BEGIN;

INSERT INTO accounts (account_id, balance) VALUES (1, 1000);
INSERT INTO accounts (account_id, balance) VALUES (2, 2000);

UPDATE accounts SET balance = balance - 500 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 500 WHERE account_id = 2;

COMMIT;