const router = require("express").Router();
const commentsRoute = require("./posts");
const searchRoute = require("./search");
 
 
 

// go to /api/posts
router.use("/posts", commentsRoute);
router.use("/search", searchRoute);


  

module.exports = router;
