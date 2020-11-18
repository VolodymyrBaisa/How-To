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
