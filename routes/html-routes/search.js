const express = require("express");

const Sequelize = require("sequelize");

const router = express.Router();
const db = require("../../models");

// routing (html) /posts
router.get("/search", (req, res) => {
  const searchQuery = req.query.search;
  const { Op } = Sequelize;

  //console.log(searchQuery);
  //get search from db and send to template
  db.post
    .findAll({
      // where: {
      //   // u_title: { [Op.like]: "%" + searchQuery + "%" },
      //   tags: { searchQuery },
      //   // u_name: { [Op.like]: "%" + searchQuery + "%" },
      //   // topic: { [Op.like]: "%" + searchQuery + "%" },
      // },
      include: [db.userprofiles],
      order: [["id", "DESC"]],
    })
    .then((res) => {
      console.log(res);
      res.render("index", { posts: res });
    })
    .catch((err) => {
      res.status(500);
      next(err);
    });
});

module.exports = router;
