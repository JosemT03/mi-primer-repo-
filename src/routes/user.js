const express = require("express");
const userschema = require("../models/user");

const Router = express.Router();

//create user 
router.post("/users", (req, res) => {
  const user = userschema(req.body);
  user.save().then((data) => res.json(data)).catch((error) => res.json({Message: error }));
});

// get all users 
router.get("/users", (req, res) => {
    userschema.find().then((data) => res.json(data)).catch((error) => res.json({Message: error }));
  });

  // get a user 
router.get("/users/:id", (req, res) => {
    const{ id } = req.params;
    userschema.findById(id).then((data) => res.json(data)).catch((error) => res.json({Message: error }));
  });

// update a user 
router.put("/users/:id", (req, res) => {
    const{ id } = req.params;
    const { name, age, email} = req.body;
    userschema.upadateOne({_id: id }, { $set: {name, age, email} }).then((data) => res.json(data)).catch((error) => res.json({Message: error }));
  });

  // delete a user 
router.delete("/users/:id", (req, res) => {
    const{ id } = req.params;
    userschema.remove({_id: id }).then((data) => res.json(data)).catch((error) => res.json({Message: error }));
  });

module.exports = Router; 

