// routes/project-routes.js
const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');
const Exercise = require('../../models/exercise');


/* GET home page */




router.get('/exercises',(req,res,next)=>{
  Exercise.find()
    .then((response)=>{
      res.json(response)
})
    .catch((err)=>{
      res.json(err)
})
})

router.post('/exercises/add', (req, res, next)=>{
  
  Exercise.create({
    intensity:req.body.intensity || "High",
    creator: "Arthur",
    reps: req.body.reps || 30,
    sets: req.body.sets || 50,
   weight: req.body.weight || 0,
   details:req.body.details,
   gooffor:req.body.goodfor,
   badfor:req.body.badfor,
   workouttime:req.body.workouttime,
   type:req.body.type,
   
  })
    .then(response => {
        Project.findByIdAndUpdate(req.body.projectID, {$push:{ exercises: response._id }})
        .then(theResponse => {
            res.json(response);
        })
        .catch(err => {
          res.json(err);
      })
    })
    .catch(err => {
      res.json(err);
    })
})


// PUT route => to update a specific exercise
router.put('/exercises/:id', (req, res, next)=>{

  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Exercise.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({message: `Exercise with ${req.params.id} is updated successfully.`});
    })
    .catch(err => {
      res.json(err);
    })
})

// DELETE route => to delete a specific exercise
router.delete('/exercises/:id', (req, res, next)=>{

  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Exercise.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({message: `Exercise with ${req.params.id} is removed successfully.`});
    })
    .catch(err => {
      res.json(err);
    })
})




module.exports = router;
