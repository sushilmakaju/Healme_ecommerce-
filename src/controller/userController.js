
const express = require('express');
const router = express.Router();
const UserProfileSchema = require('../models/usermodel')


// controller to add a new user profile to the database

const userProfile = (req,res) =>{

    // const {name,email} = req.body;
    const data = req.body;
    const name = data.name;
    const email = data.email;

    const newUserProfile = new UserProfileSchema(
        {
            name : name,
            email : email
        });
    newUserProfile
    .save()
    .then((data) =>{
        res
        .status(201)
        .json({ message: "User profile added successfully", data});

})

.catch((err) => {
    res.status(500).json({ message: "Error adding user profile", err });
});

};

module.exports = userProfile