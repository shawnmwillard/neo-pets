const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {
  static upvote(body, models) {
    return models.Reaction.create({
      user_id: body.user_id,
      post_id: body.post_id,
      type_reaction: body.type_reaction,
    }).then(() => {
      return Post.findOne({
        where: {
          id: body.post_id,
        },
        attributes: [
          "id",
          "text",
          "user_id",
          "place",
          "created_at",
          [
            sequelize.literal(
              "(SELECT COUNT(*) FROM reaction WHERE post.id = reaction.post_id)"
            ),
            "reaction_count",
          ],
        ],
      });
    });
  }
}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    text: {
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
    isContest: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    // image: {
    //   type: DataTypes.STRING,
    // },
    name: {
      type: DataTypes.STRING,
    },
    avatar: {
      type: DataTypes.STRING,
    },
    cloudinary_id: {
      type: DataTypes.STRING,
    },
    place: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
