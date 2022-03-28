const router = require("express").Router();

const userRoutes = require("./user-routes");
const postRoutes = require("./post-routes");
const commentRoutes = require("./comment-routes");
const animalRoutes = require("./animal-routes");
const breedRoutes = require("./breed-routes");
const petsRoutes = require("./pet-routes");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);
router.use("/animals", animalRoutes);
router.use("/breeds", breedRoutes);
router.use("/pets", petsRoutes);

module.exports = router;
