const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const { truncate } = require("./user");

class Reactionsetup extends Model {}
//table setup of the reaction and adding points
Reactionsetup.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "reactionsetup",
  }
);
module.exports = Reactionsetup;
