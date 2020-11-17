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
