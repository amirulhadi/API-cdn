
exports.getAllUser = () => {
    let query = `select id, username, email, phoneno, skillset, hobby from userlistdetails`
    return query
}