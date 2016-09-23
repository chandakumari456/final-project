var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var batches = require('../model/batch');


router.post('/add',function(req,res){
  console.log(req.body);

  var batch = new batches(req.body);
  batch.NumberOfParticipants = parseInt(req.body.NumberOfParticipants);
  batch.actualStartDate="";
  batch.actualEndDate="";

  batch.ParticipantsMovingOut = 0;

  batch.save(function(err){
    if(err){
      res.send(err);
    }
    else{
      res.send('batch added');
    }
  })
 });
 router.get('/getDetails',function(req,res){

   var batch = mongoose.model("batchDetails");
    batch.find({}, function(err, data){
      if(err){
      }else{
        res.json(data);
      }
    });
  });

  router.put('/edit',function(req,res){
    console.log(req.body);

    var batch = new batches();
    var query = { waveName: req.body.waveName };
    var json = req.body;
    movie.update(query,json , function (err) {
     if (err) return handleError(err);
      else{
      res.send('updated successfully');
      }
    });
   });

module.exports = router;
