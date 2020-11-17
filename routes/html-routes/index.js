<<<<<<< HEAD
const express = require("express");

const router = express.Router();
const postsRoute = require("./posts");

// get route -> index
router.get("/", (req, res) => {
  res.redirect("/posts");
});

// how to page
router.use("/posts", postsRoute);

module.exports = router;
=======
const express = require("express");

const router = express.Router();
const postsRoute = require("./posts");

// get route -> index
router.get("/", (req, res) => {
  res.redirect("/posts");
});

// how to page
router.use("/posts", postsRoute);

module.exports = router;
>>>>>>> 79ef5e7f81c9867898255e83bd9edf8a168915de
