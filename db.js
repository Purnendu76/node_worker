const mongoose = require('mongoose');
//define the mongoDB connection url...
const mongoUrl = 'mongodb://localhost:27017/restruent'; // Ensure no leading space
//setup mongoDB connection
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
//get defult connection
//mongoose mantain the defult connection object represention the mongoDB connection
const db = mongoose.connection;
//defult event listiner for data base connection
db.on('connected', function() {
    console.log("Database is successfully connected!!");
});

db.on('error', function(err) {
    console.error("Database is getting an error!!", err);
});

db.on('disconnected', function() {
    console.log("Database is disconnected");
});

module.exports = db;
