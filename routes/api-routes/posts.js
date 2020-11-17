<<<<<<< HEAD
const express = require("express");
const router = express.Router();
const db = require("../../models");

// /API/COMMENTS/
// post comment route -> back to index
router
  .route("/")
  // POST to posts
  .post((req, res, next) => {
    db.post
      .create(req.body)
      .then((newPost) => {
        console.log("new", newPost);
        res.redirect("/");
      })
      .catch((err) => {
        res.status(500);
        next(err);
      });
  });

module.exports = router;
=======
const express = require("express");
const router = express.Router();
const db = require("../../models");

// /API/COMMENTS/
// post comment route -> back to index
router
  .route("/")
  // POST to posts
  .post((req, res, next) => {
    db.post
      .create(req.body)
      .then((newPost) => {
        console.log("new", newPost);
        res.redirect("/");
      })
      .catch((err) => {
        res.status(500);
        next(err);
      });
  });

module.exports = router;
>>>>>>> 79ef5e7f81c9867898255e83bd9edf8a168915de
