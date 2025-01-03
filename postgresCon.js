import postgres from 'postgres';
import repl from 'repl'
import dotenv from 'dotenv';

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;
const connectionString = DATABASE_URL;
const sql = postgres(connectionString);

/* async function testConnection() {
  try {
    const result = await sql`SELECT * FROM classroom`;
    result.forEach(row => {
      console.log(row);
    }
    );
    
  } catch (error) {
    console.error('Connection failed:', error);
  }
}

testConnection(); */
const replServer = repl.start('> ');
replServer.context.sql = sql;
console.log('REPL started. You can use the "sql" object to run queries.');

export default sql;