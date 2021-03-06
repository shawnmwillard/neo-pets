const router = require("express").Router();
const { Post, User, Reaction, Comment } = require("../models");
const sequelize = require("../config/connection");

router.get("/", (req, res) => {
  Post.findAll({
    order: [["created_at", "DESC"]],
    attributes: [
      "id",
      "text",
      "user_id",
      "place",
      "avatar",
      "created_at",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM reaction WHERE post.id = reaction.post_id)"
        ),
        "reaction_count",
      ],
    ],

    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username", "first_name", "last_name"],
        },
      },
      {
        model: User,
        attributes: ["username", "first_name", "last_name"],
      },
    ],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render("homepage", { posts });
      //res.render("homepage", dbPostData[0].get({ plain: true }));
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  console.log(req.session);
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("login");
});

router.get("/post/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "text",
      "user_id",
      "place",
      "avatar",
      "created_at",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM reaction WHERE post.id = reaction.post_id)"
        ),
        "reaction_count",
      ],
    ],

    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username", "first_name", "last_name"],
        },
      },
      {
        model: User,
        attributes: ["username", "first_name", "last_name"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "Neo-Pet found a post with this id" });
        return;
      }
      const post = dbPostData.get({ plain: true });
      console.log(post);
      res.render("single-post", { post });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
