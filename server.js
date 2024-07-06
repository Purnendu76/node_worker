const express = require('express');
const app = express();
const db = require('./db');

const Student = require('./models/student');
const Food = require('./models/foodItem');
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // data stored in req.body

app.get('/', function (req, res) {
  res.send('Hey Nil! How can I help you?');
});





app.post('/food', async function (req, res) {
  try {
    const fooddata = req.body;
    const foodObj = new Food(fooddata);
    const foodRes = await foodObj.save();
    console.log("Food item is saved");
    res.status(200).json(foodRes);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Error' });
  }
});

//import worker router

const workerRouter = require('./Router/workerRouter');
app.use('/worker', workerRouter);

//import student router
const studentRouter = require('./Router/studentRouter');
app.use('/student', studentRouter);



app.listen(7000, function () {
  console.log('Listening on port 7000');
});
