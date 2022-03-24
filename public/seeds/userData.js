const { User } = require("../../models");

const userData = [
  {
    username: "kdunbobbin0",
    email: "kdunbobbin0@ifeng.com",
    password: "pass123",
    first_name: "Krissy",
    last_name: "Dunbobbin",
    country: "Sweden",
  },
  {
    username: "tduplock1",
    email: "tduplock1@dyndns.org",
    password: "pass123",
    first_name: "Terza",
    last_name: "Duplock",
    country: "China",
  },
  {
    username: "nclayton2",
    email: "nclayton2@t-online.de",
    password: "pass123",
    first_name: "Nikki",
    last_name: "Clayton",
    country: "United States",
  },
  {
    username: "jpillman3",
    email: "jpillman3@biblegateway.com",
    password: "pass123",
    first_name: "Jannel",
    last_name: "Pillman",
    country: "Vietnam",
  },
  {
    username: "lcereceres4",
    email: "lcereceres4@youtube.com",
    password: "pass123",
    first_name: "Lulu",
    last_name: "Cereceres",
    country: "Venezuela",
  },
  {
    username: "jinderwick5",
    email: "jinderwick5@macromedia.com",
    password: "pass123",
    first_name: "Jamey",
    last_name: "Inderwick",
    country: "Montenegro",
  },
  {
    username: "tkachel6",
    email: "tkachel6@thetimes.co.uk",
    password: "pass123",
    first_name: "Teresina",
    last_name: "Kachel",
    country: "Jordan",
  },
  {
    username: "tbotly7",
    email: "tbotly7@fotki.com",
    password: "pass123",
    first_name: "Tana",
    last_name: "Botly",
    country: "Czech Republic",
  },
  {
    username: "cmusselwhite8",
    email: "cmusselwhite8@wikipedia.org",
    password: "pass123",
    first_name: "Clo",
    last_name: "Musselwhite",
    country: "Philippines",
  },
  {
    username: "jzoephel9",
    email: "jzoephel9@wired.com",
    password: "pass123",
    first_name: "Juanita",
    last_name: "Zoephel",
    country: "Croatia",
  },
  {
    username: "nbiscoa",
    email: "nbiscoa@studiopress.com",
    password: "pass123",
    first_name: "Nerti",
    last_name: "Bisco",
    country: "Indonesia",
  },
  {
    username: "tsealoveb",
    email: "tsealoveb@yandex.ru",
    password: "pass123",
    first_name: "Tarra",
    last_name: "Sealove",
    country: "Indonesia",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
