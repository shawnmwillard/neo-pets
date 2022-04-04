const { Pet } = require("../../models");

const petData = [
  {
    name: "Chester",
    user_id: 1,
    type_pet: 1,
  },
  {
    name: "Shumi",
    user_id: 1,
    type_pet: 2,
  },
  {
    name: "Scooby",
    user_id: 1,
    type_pet: 3,
  },
  {
    name: "Spike",
    user_id: 2,
    type_pet: 4,
  },
  {
    name: "Duke",
    user_id: 2,
    type_pet: 5,
  },
  {
    name: "Manimal",
    user_id: 3,
    type_pet: 1,
  },
  {
    name: "Kitty",
    user_id: 4,
    type_pet: 7,
  },
  {
    name: "Moew",
    user_id: 4,
    type_pet: 10,
  },
  {
    name: "Charles",
    user_id: 5,
    type_pet: 1,
  },
  {
    name: "Zumby",
    user_id: 6,
    type_pet: 11,
  },
  {
    name: "Fenchy",
    user_id: 7,
    type_pet: 6,
  },
];

const seedPet = () => Pet.bulkCreate(petData);

module.exports = seedPet;
