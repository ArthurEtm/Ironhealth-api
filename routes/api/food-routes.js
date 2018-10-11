// routes/project-routes.js
const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');
const Food = require('../../models/food');


router.get('/foods',(req,res,next)=>{
  Food.find()
    .then((response)=>{
      res.json(response)
})
    .catch((err)=>{
      res.json(err)
})
})


router.get('/foods/:id',(req,res,next)=>{
  Food.findById(req.params.id)
    .then((response)=>{
      res.json(response)
  })
    .catch((err)=>{
      res.json(err)
  })
  })
  

/* GET home page */
router.post('/foods', (req, res, next)=>{
  
  Food.create({

    creator:req.body.creator,
    fat: req.body.fat,
    carbs: req.body.carbs,
    protein:req.body.protein,
    calories:req.body.calories,
    vegan:req.body.vegan,
    description:req.body.description,
    cookoptions:req.body.cookOptions,
    healthy:req.body.healthy,
    image:req.body.image,
  })

    .then(response => {
        Project.findByIdAndUpdate(req.body.projectID, {$push:{ foods: response._id }})
        .then(theResponse => {
            res.json(theResponse);
        })
        .catch(err => {
          res.json(err);
      })
    })
    .catch(err => {
      res.json(err);
    })
})



// PUT route => to update a specific food
router.put('/foods/:id', (req, res, next)=>{

  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }


  Food.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({message: `Food with ${req.params.id} is updated successfully.`});
    })
    .catch(err => {
      res.json(err);
    })
})

// DELETE route => to delete a specific food
router.delete('/foods/:id', (req, res, next)=>{

  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Food.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({message: `Food with ${req.params.id} is removed successfully.`});
    })
    .catch(err => {
      res.json(err);
    })
})




module.exports = router;
