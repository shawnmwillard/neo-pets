const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Pet extends Model {}

Pet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    type_pet: {
      type: DataTypes.INTEGER,
      references: {
        model: "breed",
        key: "id",
      },
      color: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "pet",
  }
);
module.exports = Pet;
