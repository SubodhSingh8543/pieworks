const express = require("express");
const { Weather } = require("../models/weather.model");
const weatherRouter = express.Router();

//add one 
weatherRouter.post("/addone", async (req, res) => {
    const payload = req.body;

    try {
        const data = await new Weather(payload);
        data.save();
        res.status(200).send({ "msg": "data has been added successfully" });
    } catch (error) {
        console.log(error);
        res.status(400).send({ "msg": "Some error" });
    }
});

//get all items 
weatherRouter.get("/", async (req,res) => {
    const {page,limit} = req.query;
    const skip = (page - 1) * limit;
 
    let obj = {};
    
    console.log("This is query:-",req.query);
 
    for(let x in req.query){
       if(x !=="page" && x !=="limit"){
          obj[x] = req.query[x];
       }
    }
 
    try {
       const data = await  Weather.find(obj).skip(skip).limit(limit)
       res.status(200).send(data);
    } catch (error) {
       console.log(error);
       res.status(400).send({"msg":"Some error"});
    }   
 }); 

 // update
weatherRouter.patch("/update/:id", async (req,res) => {
    const id = req.params.id;
    const payload = req.body;
  
    console.log(id,payload);
    try {
        await  Weather.findByIdAndUpdate(id,payload);
        res.status(200).send({"msg":"data has been updated successfully"});
    } catch (error) {
        console.log(error);
        res.status(400).send({"msg":"Some error"});
    }
});

module.exports = { weatherRouter };