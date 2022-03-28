const { Reactionsetup } = require("../../models");

const reactionSetupData = [
  {
    text: "PawUp",
    points: 10,
  },
  {
    text: "Meow",
    points: 10,
  },
  {
    text: "Love",
    points: 5,
  },
  {
    text: "Cute",
    points: 3,
  },
  {
    text: "isOk",
    points: 1,
  },
];

const seedreactionSetupData = () => Reactionsetup.bulkCreate(reactionSetupData);

module.exports = seedreactionSetupData;
