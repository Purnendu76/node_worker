const express = require('express');
const router = express.Router();
const Worker = require('../models/worker'); // Correctly require the Worker model

// Post method for worker
router.post('/', async function (req, res) {
  try {
    const data = req.body;
    const workerObj = new Worker(data);
    const response = await workerObj.save();
    console.log("Data is saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Error' });
  }
});

// Get method for workers
router.get('/', async function (req, res) {
  try {
    const data = await Worker.find();
    console.log("Data is retrieved");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Error' });
  }
});

// Find worker by work type
router.get('/:worktype', async function (req, res) {
  try {
    const worktype = req.params.worktype;
    if (['chef', 'waiter', 'manager', 'casher'].includes(worktype)) {
      const response = await Worker.find({ work_Position: worktype });
      console.log("Response retrieved");
      res.status(200).json(response);
    } else {
      res.status(400).json({ error: 'Invalid work type' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Error' });
  }
});

router.use(express.json());
//update the data
router.put('/:id',async function(req,res){
  try{
    const workerId=req.params.id;//extract the id form url
    const  updateWorkerData=req.body;//update the data from worker

    const response= await Worker.findByIdAndUpdate(workerId,updateWorkerData,{//findByIdAndUpdate is mono functon to update
        new:true,//return the updatetd data
        runValidators:true,//chaking the validatin like is it requere or not

      
    })


    if(!response){
      console.log(err);
    res.status(404).json({ error: 'worker not found' });//this is for the the worker is not found
    }
    console.log("data updated")
    res.status(200).json(response);

  }catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Error' });
  }
});

//delete data
router.delete('/:id',async function(req,res){
  try{
    const workerId=req.params.id;//extract the id form url
    const response= await Worker.findByIdAndDelete(workerId);//findByIdAndUpdate is mono functon to update

    if(!response){
      console.log(err);
    res.status(404).json({ error: 'worker not found' });//this is for the the worker is not found
    }
    console.log("your data successfully deleted🗑️")
    res.status(200).json(response);
  }catch(err){
      console.log(err);
      res.status(500).json({ error: 'Error' });
    }
  
})

module.exports =router;
