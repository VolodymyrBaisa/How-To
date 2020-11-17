<<<<<<< HEAD
const express = require("express");

const router = express.Router();
const db = require("../../models");

// routing (html) /posts
router.get("/", (req, res) => {
  // get posts from db and send to template
  db.post
    .findAll({
      include: [db.userprofiles],
      order: [["id", "DESC"]],
    })
    .then((posts) => {
      res.render("index", { posts: posts });
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

// routing (html) /posts
router.get("/", (req, res) => {
  // get posts from db and send to template
  db.post
    .findAll({
      include: [db.userprofiles],
      order: [["id", "DESC"]],
    })
    .then((posts) => {
      res.render("index", { posts: posts });
    })
    .catch((err) => {
      res.status(500);
      next(err);
    });
});

module.exports = router;
>>>>>>> 79ef5e7f81c9867898255e83bd9edf8a168915de
