module.exports = {
  check: (value) => {
    return value !== "" && value !== undefined && value !== null;
  },

  getObject: (obj, key, value) => {
    return obj[key][value];
  },
};
