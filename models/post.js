module.exports = function (sequelize, DataTypes) {
  const post = sequelize.define("post", {
    u_text: {
      type: DataTypes.STRING(500),
    },
    poll: {
      type: DataTypes.STRING(500),
    },
    img_or_video: {
      type: DataTypes.STRING,
    },
    upload: { type: DataTypes.STRING },
    tags: { type: DataTypes.STRING },
    likes_count: { type: DataTypes.INTEGER },
    comments_count: { type: DataTypes.INTEGER },
    share_count: { type: DataTypes.INTEGER },
  });

  post.associate = function (models) {
    post.belongsTo(models.userprofiles, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return post;
};
