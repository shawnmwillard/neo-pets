const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Animal, Breed, Pet } = require("../models");
