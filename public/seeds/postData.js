const { Post } = require("../../models");

const postData = [
  {
    text: "The cutest dog in the world",
    user_id: 1,
    is_contest: false,
    place: "East Nashville",
  },
  {
    text: "The cutest cat in the world",
    user_id: 2,
    is_contest: false,
    place: "North Nashville",
  },
  {
    text: "Check the best dog park on Germantown",
    user_id: 3,
    is_contest: false,
    place: "Downtown Nashville",
  },
  {
    text: "My Dog on the park",
    user_id: 4,
    is_contest: false,
    place: "Germantown Nashville",
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
