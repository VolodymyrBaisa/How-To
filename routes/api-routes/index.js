var express = require("express");

var router = express.Router();


var index = require("../../models/index");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {

    console.log("I am in there ");
    index.all(function(data) {
    var hbsObject = {
      index: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/index", function(req, res) {
//     index.create([
//     "name", "sleepy"
//   ], [
//     req.body.name, req.body.sleepy
//   ], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
});

router.put("/api/index/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  index.update({
    sleepy: req.body.sleepy
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/index/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  index.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
