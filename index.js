// Create a test database on heroku
// Initialize the project
// Connect your app to the database
  // Using a package - pg node-postgres
// import pg ***TICK***
// Create a client ***TICK***
// Pass your creds to the client
// Connect to the database
// Send a query
// Disconnect from the database
// Console.log the result of your query

import pg from "pg"

const client = new pg.Client({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    ssl: { rejectUnauthorized: false }
});

await client.connect();
const result =  await client.query(`SELECT NOW() AS current_time`);
await client.end();

// console.log(result);
console.log(result.rows[0].current_time);
console.log(typeof(result.rows[0]));
console.log(typeof(result.rows[0].current_time));



