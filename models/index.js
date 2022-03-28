const User = require("./User");
const Breed = require("./Breed");
const Animal = require("./Animal");
const Pet = require("./Pet");
const Post = require("./Post");
const Comment = require("./Comment");
const Vote = require("./Vote");
const Reaction = require("./Reaction");
const Reactionsetup = require("./Reactionsetup");

Animal.hasMany(Breed, {
  foreignKey: "animal_id",
});

Breed.belongsTo(Animal, {
  foreignKey: "animal_id",
});

Pet.belongsTo(Breed, {
  foreignKey: "type_pet",
});

User.hasMany(Pet, {
  foreignKey: "user_id",
});

Pet.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

Reaction.belongsTo(User, {
  foreignKey: "user_id",
});

Reaction.belongsTo(Post, {
  foreignKey: "post_id",
});

User.hasMany(Reaction, {
  foreignKey: "user_id",
});

Post.hasMany(Reaction, {
  foreignKey: "post_id",
});

User.belongsToMany(Post, {
  through: Reaction,
  as: "reaction_posts",
  foreignKey: "user_id",
});

Post.belongsToMany(User, {
  through: Reaction,
  as: "reaction_posts",
  foreignKey: "post_id",
});

//add reaction setup
module.exports = { User, Animal, Breed, Pet, Post, Reaction, Reactionsetup };
