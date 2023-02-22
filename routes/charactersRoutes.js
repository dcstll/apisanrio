const router = require('express').Router();
const Characters = require("../models/characters")

router.get("/", (req, res) => {
  Characters.find((err, result) => {
    if(err) throw new Error(err)
    res.json(result)
    console.log(result);
  });

});


module.exports = router;
