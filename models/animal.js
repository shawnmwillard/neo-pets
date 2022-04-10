const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class animal extends Model {}

animal.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "animal",
  }
);
module.exports = animal;
