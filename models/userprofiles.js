module.exports = function (sequelize, DataTypes) {
  const userProfiles = sequelize.define("userprofiles", {
    u_name: {
      type: DataTypes.STRING(20),
    },
    topic: {
      type: DataTypes.STRING(20),
    },
    dob: {
      type: DataTypes.DATE,
    },
    gender: {
      type: DataTypes.STRING(10),
    },
    user_pic: {
      type: DataTypes.STRING,
    },
    followings: {
      type: DataTypes.INTEGER,
    },
    followers: {
      type: DataTypes.INTEGER,
    },
    post_likes: {
      type: DataTypes.INTEGER,
    },
  });
  userProfiles.associate = function (models) {
    userProfiles.hasMany(models.post, {
      onDelete: "cascade",
    });
  };
  return userProfiles;
};
