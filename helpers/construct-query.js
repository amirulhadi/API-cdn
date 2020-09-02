const { Pool, Client } = require('pg')
const dbConfig = require('../dbconfig')
const pool = dbConfig.createPool();

exports.constructQuery = async (sql, params) => {
    params = params || [];
    const client = await pool.connect()

    return new Promise (async (resolve, reject) => {
        try{
            var startTime = new Date().getTime()
            let result = await client.query(sql, params)
            var endTime = new Date().getTime()
            var elapsedTime = endTime - startTime

            resolve(result)
        } catch (e){
            reject('Error: ' + e)
        }
        client.release()
    })
}