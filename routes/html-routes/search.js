const express = require("express");

const router = express.Router();
const db = require("../../models");

// routing (html) /posts
router.get("/search", (req, res, next) => {
  // get posts from db and send to template
  db.postcomments
    .findAll({
      where: {
        u_text: req.params.id
      }
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
