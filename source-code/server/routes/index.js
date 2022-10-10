var express = require('express');
var router = express.Router();

router.get('/add/:firstNumber/and/:secondNumber', (req,res)=>{
  console.log(req.params.firstNumber + req.params.secondNumber);
  let firstNumber = parseInt(req.params.firstNumber),
      secondNumber = parseInt(req.params.secondNumber);
  res.json({"Addition" : firstNumber + secondNumber});
});

router.post('/save', (req,res)=>{
  let name = req.body.name;
  let desc = req.body.desc;
});
module.exports = router;