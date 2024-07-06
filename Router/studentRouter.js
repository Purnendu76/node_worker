const express = require('express');
const router = express.Router();
const Student = require('../models/student'); // Correctly require the Student model

// Get all students
router.get('/', async function (req, res) {
  try {
    const data = await Student.find(); // Use Student with a capital S
    console.log("Data is retrieved");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Error' });
  }
});

// Post a new student
router.post('/', async function (req, res) {
  try {
    const data = req.body; // getting data from req.body
    const DeptObj = new Student(data); // create a new Student instance
    const response = await DeptObj.save(); // save the data
    console.log("Data is saved");
    res.status(200).json(response); // show the status
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Error' });
  }
});

// Find student by department type
router.get('/:DeptType', async function (req, res) {
  try {
    const DeptType = req.params.DeptType;
    if (['BCA', 'BBA', 'MCA', 'MBA'].includes(DeptType)) {
      const response = await Student.find({ department: DeptType }); // Use Student with a capital S
      console.log("Response retrieved");
      res.status(200).json(response);
    } else {
      res.status(400).json({ error: 'Invalid department type' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Error' });
  }
});

module.exports = router; // Export the router
