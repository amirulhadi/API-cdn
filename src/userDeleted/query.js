exports.userDeleted = (id) => {
    let query = `delete from userlistdetails where id = '${id}'`
    return query
}