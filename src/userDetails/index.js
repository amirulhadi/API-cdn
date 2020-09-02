
// const { constructQuery } = require('../../helpers/construct-query')
// const queries = require('./query')

// module.exports = async function getUserDetails(id){
//     const obj = {
//         data: []
//     }

//     //query
//     const getAllUserResult = await constructQuery(queries.getUserDetails(id)).then(data => data.rows).catch(err => {throw err})

//     //mapping
//     getAllUserResult.forEach(element => {
//         let node = {
//             "username": element.username,
//             "email": element.email,
//             "phoneNo": element.phoneNo,
//             "skillset": element.skillset,
//             "hobby": element.hobby
//         }
//         obj.data.push(node)

//     });

//     return obj;





















// }