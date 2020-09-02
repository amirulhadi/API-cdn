const Pool = require('pg').Pool;

var pool2;
function createPool(){
    if(!pool2){
        pool2 = new Pool({
            user: "cdn_data@cdndb01",
            host: "cdndb01.postgres.database.azure.com",
            database: "postgres",
            password: "Password00!",
            port: 5432,
            ssl: true
        })
    }
    return pool2;
}

module.exports = { createPool }