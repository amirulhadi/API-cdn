const express = require("express");
const router = express.Router();
const service = require ('./service')
const queries = require('./userCreated/query')
const queryUserUpdate = require('./userUpdate/query')
const queryUserDelete = require('./userDeleted/query')
const queryUserDetails = require('./userDetails/query')
const { constructQuery } = require('../helpers/construct-query')
const uuid = require ("uuid");


router.get("/retrieveAllUser", getAllUser)
router.get("/userDetails/:id", getUserDetails)
router.put("/userUpdate/:id", updateUser)
router.post("/userCreated", addUser)
router.delete("/deleteUser/:id", deleteUser)

module.exports = router;

//get all list of users
async function getAllUser (req, res, next){
    try {   
        let result = await service.getAllUser()
        if (result){
            // const userArray = Object.values(result)
            res.status(200).json(result)
        } else {
            res.status(200).json({"status": "No data received"})
        }
    }
    catch (e){
        res.status(400).json({Error: e.message})
    }
}

//get the details when click on the id
async function getUserDetails (req, res, next){
    let id = req.params.id;
    try {
        let result = await constructQuery(queryUserDetails.getUserDetails(id)).then(data => data.rows).catch(err => {throw err})
        if (result){
            res.status(200).json(result)
        } else {
            res.status(200).json({"status": "No data received"})
        }
    }
    catch (e){
        res.status(400).json({Error: e.message})
    }
}

//update user details
async function updateUser (req, res, next){
        let id= req.params.id
        let username = req.body.username
        let email = req.body.email
        let phoneno = req.body.phoneno
        let skill = req.body.skillset
        let hobby = req.body.hobby
    try {
        let result = await constructQuery(queryUserUpdate.userUpdate(id, username, email, phoneno, skill, hobby)).then(data => data.rows).catch(err => {throw err})
        
        if (result){
            const userArray = Object.values(result)
            res.status(200).json(userArray)
        } else {
            res.status(200).json({"status": "No data received"})
        }
    }
    catch (e){
        res.status(400).json({Error: e.message})
    }
}

//create new user
async function addUser (req, res){
    let id = uuid.v4()
    let username = req.body.username
    let email = req.body.email
    let phoneno = req.body.phoneno
    let skill = req.body.skillset
    let hobby = req.body.hobby
    try {
        let result = await constructQuery(queries.userCreated(id, username, email, phoneno, skill, hobby)).then(data => data.rows).catch(err => {throw err})
        console.log(result)
        if (result){
            res.status(200).json(result)
        } else {
            res.status(200).json({"status": "No data received"})
        }
    }
    catch (e){
        res.status(400).json({Error: e.message})
    }
}

//delete user
async function deleteUser (req, res){
    let id = req.params.id
    try {
        let result = await constructQuery(queryUserDelete.userDeleted(id)).then(data => data.rows).catch(err => {throw err})
        if (result){
            res.status(200).json(result)
        } else {
            res.status(200).json({"status": "No data received"})
        }
    }
    catch (e){
        res.status(400).json({Error: e.message})
    }
}
