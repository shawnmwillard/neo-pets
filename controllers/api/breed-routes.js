const router = require("express").Router();
const { animal, Breed } = require("../../models");

router.get("/", (req, res) => {
  Breed.findAll({
    order: [["id", "ASC"]],
    include: [
      {
        model: animal,
        attributes: ["id", "description"],
      },
    ],
  })
    .then((dbBreedData) => res.json(dbBreedData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Breed.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: animal,
        attributes: ["id", "description"],
      },
    ],
  })
    .then((dbBreedData) => {
      if (!dbBreedData) {
        res.status(404).json({ message: "No animal found with this id" });
        return;
      }
      res.json(dbBreedData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
