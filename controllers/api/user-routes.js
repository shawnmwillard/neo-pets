const router = require("express").Router();
const { User, Contest, Vote, Comment } = require("../../models");

router.get("/", (req, res) => {
  User.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET by ID
router.get("/:id", (req, res) => {});

// POST
router.post("/", (req, res) => {});

// PUT  by ID
router.put("/:id", (req, res) => {});

// DELETE  by ID
router.delete("/:id", (req, res) => {});

module.exports = router;
