class baseResponse {
    constructor(username, email, phoneno, skill, hobby){
        this.username = username;
        this.email = email;
        this.phoneno = phoneNo;
        this.skill = skill;
        this.hobby = hobby;
    }
}

module.exports = baseResponse;