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
  {
    text: "Dog being happy",
    user_id: 5,
    is_contest: false,
    place: "Downtown Nashville",
  },
  {
    text: "Catzilla on the kitchen",
    user_id: 6,
    is_contest: false,
    place: "West Nashville",
  },
  {
    text: "Best park for dogs",
    user_id: 7,
    is_contest: false,
    place: "Capitol VIew Nashville",
  },
  {
    text: "My Dog making new friends",
    user_id: 8,
    is_contest: false,
    place: "Green Hills",
  },
  {
    text: "My cat relaxing",
    user_id: 2,
    is_contest: false,
    place: "Germantown Nashville",
  },
  {
    text: "Today take picture a the cutest cat on the block",
    user_id: 4,
    is_contest: false,
    place: "North Nashville",
  },
  {
    text: "Walking with my Dog on the park",
    user_id: 4,
    is_contest: false,
    place: "Salemtown Nashville",
  },
  {
    text: "With my cat on the beach",
    user_id: 6,
    is_contest: false,
    place: "Miami",
  },
  {
    text: "Checkout this cat is amazing",
    user_id: 9,
    is_contest: false,
    place: "Salemtown Nashville",
  },
  {
    text: "My dark cat is the best",
    user_id: 11,
    is_contest: false,
    place: "Salemtown Nashville",
  },
  {
    text: "Puppy saved my life ",
    user_id: 12,
    is_contest: false,
    place: "Nashville",
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
