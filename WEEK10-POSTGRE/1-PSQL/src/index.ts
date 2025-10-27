// fnctn to create a user tableimport { Client } from 'pg'

import { Client } from 'pg';
import dotenv from "dotenv";
dotenv.config();

const client = new Client({
    connectionString : process.env.PSQL_URL
})

async function CreateUserTable(){
    await client.connect()
    const result = await client.query(`
        CREATE TABLE Users(
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(50) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        ); 
    `);
    console.log(result)
}

CreateUserTable()