
exports.getUserDetails = (id) => {
    let query = `select username, email, phoneno, skillset, hobby from userlistdetails where id= '${id}'`
    return query
}