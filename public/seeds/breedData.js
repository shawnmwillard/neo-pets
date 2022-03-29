const { Breed } = require("../../models");

const breedData = [
  {
    description: "Gull Dong",
    animal_id: "1",
  },
  {
    description: "American Foxhound",
    animal_id: "1",
  },
  {
    description: "Beagle",
    animal_id: "1",
  },
  {
    description: "German Hound",
    animal_id: "1",
  },
  {
    description: "German Shepherd",
    animal_id: "1",
  },
  {
    description: "French Bulldog",
    animal_id: "1",
  },
  {
    description: "American Curl",
    animal_id: "2",
  },
  {
    description: "Don Sphynx",
    animal_id: "2",
  },
  {
    description: "Egyptian Mau",
    animal_id: "2",
  },
  {
    description: "Exotic Shorthair",
    animal_id: "2",
  },
  {
    description: "Foldex",
    animal_id: "2",
  },
];

const seedBreed = () => Breed.bulkCreate(breedData);
module.exports = seedBreed;
