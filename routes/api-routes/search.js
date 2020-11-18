const express = require("express");
const router = express.Router();
const db = require("../../models");

// /API/COMMENTS/
// post comment route -> back to index
router
  .route("/search/:searchTag")
  // POST to posts
  .get((req, res, next) => {
    console.log(req.params.searchTag);
    db.post
    .findAll({
    //   include: [db.userprofiles],
    //   order: [["id", "DESC"]],
    })
    .then((posts) => {
      res.render("search", { posts: posts });
    })
    .catch((err) => {
      res.status(500);
      next(err);
    });
  });

 

  
module.exports = router;
