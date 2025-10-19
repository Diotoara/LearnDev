// fnctn to create a user tableimport { Client } from 'pg'

import { Client } from 'pg';

const client = new Client({
    connectionString : "postgresql://neondb_owner:npg_YOQgwT5cL1Im@ep-fancy-hall-a1e81rgc-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
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