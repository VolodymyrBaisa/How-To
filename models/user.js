<<<<<<< HEAD
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
=======
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
>>>>>>> 79ef5e7f81c9867898255e83bd9edf8a168915de
