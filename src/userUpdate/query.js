exports.userUpdate = (id, username, email, phoneno, skill, hobby) => {
    let query = `update userlistdetails 
    set username = '${username}',
        email = '${email}',
        phoneno = '${phoneno}',
        skillset = '${skill}',
        hobby = '${hobby}'
    where id = '${id}'`

    return query;
}