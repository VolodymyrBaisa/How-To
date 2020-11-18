module.exports = function (sequelize, DataTypes) {
  const user = sequelize.define("user", {
    email: {
      type: DataTypes.STRING(50),
    },
    password: {
      type: DataTypes.STRING(15),
    },
    token: {
      type: DataTypes.STRING,
    },
  });
  return user;
};
