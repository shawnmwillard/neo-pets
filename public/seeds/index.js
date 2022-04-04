//const sequelize = require("../config/connection");
const sequelize = require("../../config/connection");
const seedUser = require("./userData");
const seedAnimal = require("./animalData");
const seedBreed = require("./breedData");
const seedPet = require("./petData");
const seedPost = require("./postData");
const seedreactionSetupData = require("./reactionSetupData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedAnimal();

  await seedBreed();

  await seedPet();

  await seedPost();

  await seedreactionSetupData();

  process.exit(0);
};

seedAll();
