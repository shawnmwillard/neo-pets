const router = require("express").Router();

const { User, animal, Breed, Pet } = require("../../models");

router.get("/", (req, res) => {
  Pet.findAll({
    order: [["created_at", "DESC"]],
    attributes: ["id", "name", "user_id", "type_pet"],

    include: [
      {
        model: Breed,
        attributes: ["id", "description"],
        include: {
          model: animal,
          attributes: ["id", "description"],
        },
      },
      {
        model: User,
        attributes: ["username", "first_name", "last_name"],
      },
    ],
  })
    .then((dbPetData) => res.json(dbPetData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Pet.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "name", "user_id", "type_pet"],
    include: [
      {
        model: Breed,
        attributes: ["id", "description"],
        include: {
          model: animal,
          attributes: ["id", "description"],
        },
      },
      {
        model: User,
        attributes: ["username", "first_name", "last_name"],
      },
    ],
  })
    .then((dbPetData) => {
      if (!dbPetData) {
        res.status(404).json({ message: "Neo-Pet found a pet with this id" });
        return;
      }
      res.json(dbPetData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Pet.create({
    name: req.body.name,
    user_id: req.body.user_id,
    type_pet: req.body.type_pet,
  })
    .then((dbPetData) => res.json(dbPetData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//update the name of the pet and type of pet
router.put("/:id", (req, res) => {
  Pet.update(
    {
      name: req.body.name,
      type_pet: req.body.type_pet,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbPetData) => {
      if (!dbPetData) {
        res.status(404).json({ message: "Neo-Pet found a pet with this id" });
        return;
      }
      res.json(dbPetData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Pet.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPetData) => {
      if (!dbPetData) {
        res.status(404).json({ message: "Neo-Pet found a pet with this id" });
        return;
      }
      res.json(dbPetData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
