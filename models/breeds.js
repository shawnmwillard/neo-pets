const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Breed extends Model {}

Breed.init(
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
    animal_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "animal",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "breed",
  }
);
module.exports = Breed;
