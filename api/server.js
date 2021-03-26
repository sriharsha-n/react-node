const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/myDB", {useNewUrlParser: true});

const userSchema = {
  firstName: String,
  lastName: String,
  email: String
}

const User=new mongoose.model("User",userSchema);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

app.get('/api/users', (req, res) => {
  console.log('api/users called!');
  User.find({},function(err,users){
    res.json(users);
  })
});

app.post('/api/user', (req, res) => {
  const user=new User(req.body.user)

  user.save(function(err){
    if(!err){
      console.log("added"+user);
    }
    else{
      console.log(err);
    }
  })

  res.json("user addedd");
});


app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});