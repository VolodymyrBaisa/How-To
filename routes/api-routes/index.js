const router = require("express").Router();
const commentsRoute = require("./posts");

// go to /api/posts
router.use("/posts", commentsRoute);

module.exports = router;
