const User = require("./User");
const Breed = require("./Breed");
const Animal = require("./Animal");
const Pet = require("./Pet");

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

module.exports = { User, Animal, Breed, Pet };
