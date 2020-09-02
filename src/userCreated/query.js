
exports.userCreated = (id, username, email, phoneno, skill, hobby) => {
    let query = `insert into userlistdetails values ('${id}', '${username}', '${email}', '${phoneno}', '${skill}', '${hobby}')`
    return query
}