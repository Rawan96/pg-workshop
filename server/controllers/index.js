const express = require("express");
const users = require("./static");
const {getUsers} = require('../database/queries/getData')
const postData = require('../database/queries/postData')

const router = express.Router();

router.get("/users", (req, res) => {
  getUsers()
  .then(({rows})=>{
    res.json(rows)
  })
  .catch()
});

router.post('/create-user',(req,res)=>{
  postData(req.body)
  .then(()=>res.redirect('/'))
  .catch(console.error)
})

module.exports = router;
