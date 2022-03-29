const router = require("express").Router();
const { Animal, Breed } = require("../../models");

router.get("/", (req, res) => {
  Animal.findAll({
    order: [["id", "ASC"]],
  })
    .then((dbAnimalData) => res.json(dbAnimalData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Animal.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Breed,
        attributes: ["id", "description"],
      },
    ],
  })
    .then((dbAnimalData) => {
      if (!dbAnimalData) {
        res.status(404).json({ message: "No animal found with this id" });
        return;
      }
      res.json(dbAnimalData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
