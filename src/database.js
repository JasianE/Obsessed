const Pool = require('pg').Pool

const client = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'hello',
    password: 'password',
    port: 5432,
})

module.exports = function execute(event){
    try{
        let result = client.query(event)
        return result
    } catch(err){
        console.log(err)
        return err
    }
}

