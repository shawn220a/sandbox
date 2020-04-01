// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
// var bcrypt = require("bcryptjs");
// Creating our User model
let geo = ("../public/assets/js/geo")

module.exports = function(sequelize, DataTypes) {
  var Log = sequelize.define("Log", {
    // The email cannot be null, and must be a proper email before creation
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    // The password cannot be null
    journal_entry: {
      type: DataTypes.STRING,
      allowNull: false
    },
    latitude: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
};
