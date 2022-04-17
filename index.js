const express = require('express')
const execute = require('./src/database')

const app = express()

app.get('/', async (req, res) => {
    const text = `
    CREATE TABLE IF NOT EXISTS "users" (
	    "id" SERIAL,
	    "name" VARCHAR(100) NOT NULL,
	    "role" VARCHAR(15) NOT NULL,
	    PRIMARY KEY ("id")
    );`;

    execute(text)
    res.json(await execute(`
    SELECT * FROM USERS
    `))
})

app.listen(3000, () => {
    console.log('server running on 3000!!!')
})