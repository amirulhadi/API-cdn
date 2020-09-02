
const { constructQuery } = require('../../helpers/construct-query')
const queries = require('./query')

module.exports = async function getAllUser(){
    const obj = []

    //query
    const getAllUserResult = await constructQuery(queries.getAllUser()).then(data => data.rows).catch(err => {throw err})

    //mapping
    getAllUserResult.forEach(element => {
        let node ={
            "id": element.id,
            "username": element.username,
            "email": element.email,
            "phoneNo": element.phoneno,
            "skillset": element.skillset,
            "hobby": element.hobby
        }
        obj.push(node)
    });
    return obj;





















}