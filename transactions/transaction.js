/* Example of Transaction Management in Node.js with postgres Library
Here’s how you can manage transactions using the postgres library in Node.js: */

import postgres from 'postgres';
import dotenv from 'dotenv';

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;
const sql = postgres(DATABASE_URL);

async function transferFunds(fromAccount, toAccount, amount) {
  const transaction = await sql.begin();

  try {
    await transaction`UPDATE accounts SET balance = balance - ${amount} WHERE account_id = ${fromAccount}`;
    await transaction`UPDATE accounts SET balance = balance + ${amount} WHERE account_id = ${toAccount}`;

    await transaction.commit();
    console.log('Transaction committed successfully.');
  } catch (error) {
    await transaction.rollback();
    console.error('Transaction rolled back due to error:', error);
  }
}

transferFunds(1, 2, 500);