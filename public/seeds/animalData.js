const { animal } = require("../../models");

const animalData = [
  {
    description: "Dog",
  },
  {
    description: "Cat",
  },
  {
    description: "Bird",
  },
  {
    description: "Snake",
  },
  {
    description: "Horse",
  },
  {
    description: "Donkey",
  },
  {
    description: "Guinea pig",
  },
  {
    description: "Rabbit",
  },
  {
    description: "Fish",
  },
  {
    description: "Frog",
  },
  {
    description: "Lizard",
  },
];

const seedAnimal = () => animal.bulkCreate(animalData);

module.exports = seedAnimal;
