const express = require("express");

const router = express.Router();
const postsRoute = require("./posts");
const searchRoute = require("./search");

// get route -> index
router.get("/", (req, res) => {
  res.redirect("/posts");
});

// how to page
router.use("/posts", postsRoute);
router.use("/search", searchRoute);

module.exports = router;
