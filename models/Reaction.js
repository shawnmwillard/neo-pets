const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const { truncate } = require("./user");

class Reaction extends Model {}

Reaction.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "post",
        key: "id",
      },
    },
    type_reaction: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "reactionsetup",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "reaction",
  }
);
module.exports = Reaction;
