
// const { constructQuery } = require('../../helpers/construct-query')
// const queries = require('./query')
// const { addUser } = require('../service');
// const response = require('../model/response');
// const { createPool } = require('../../dbconfig')
// const dbConfig = require('../../dbconfig')
// const pool = dbConfig.createPool();


// module.exports = async function userCreated(username, email, phoneno, skill, hobby){
//     try{
//         const userCreatedResult = await constructQuery(queries.userCreated(username, email, phoneno, skill, hobby)).then(data => data.rows).catch(err => {throw err})
//         res.status(200).json(userCreatedResult)
//     } catch (e){
//         res.status(400).json({Error: e.message})
//     }
// }