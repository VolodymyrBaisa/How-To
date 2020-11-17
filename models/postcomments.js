<<<<<<< HEAD
module.exports = function (sequelize, DataTypes) {
  const postcomments = sequelize.define("postcomments", {
    u_text: {
      type: DataTypes.STRING(500),
    },
    post_id: {
      type: DataTypes.INTEGER,
    },
    userprofiles_id: {
      type: DataTypes.INTEGER,
    },
    post_id: {
      type: DataTypes.INTEGER,
    },
  });
  return postcomments;
};
=======
module.exports = function (sequelize, DataTypes) {
  const postcomments = sequelize.define("postcomments", {
    u_text: {
      type: DataTypes.STRING(500),
    },
    post_id: {
      type: DataTypes.INTEGER,
    },
    userprofiles_id: {
      type: DataTypes.INTEGER,
    },
    post_id: {
      type: DataTypes.INTEGER,
    },
  });
  return postcomments;
};
>>>>>>> 79ef5e7f81c9867898255e83bd9edf8a168915de
