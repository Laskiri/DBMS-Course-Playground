import odbc from 'odbc';
import dotenv from 'dotenv';

dotenv.config();

const DSN = process.env.DSN2 // Your ODBC Data Source Name
console.log("");
async function main() {
  try {
    // Connect to the database
    const connection = await odbc.connect("DSN="+DSN);

    // Execute a query
    const result = await connection.query('ALTER TABLE quiz1 ADD passed BOOLEAN;');

    // Process the result
    result.forEach(row => {
      console.log(row);
    });

    // Close the connection
    await connection.close();
  } catch (error) {
    console.error('Error:', error);
  }
}

main();