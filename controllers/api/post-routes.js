const router = require("express").Router();
const { Post, User, Reaction, Comment } = require("../../models");
const sequelize = require("../../config/connection");

const { cloudinary } = require("../../config/cloudinary");
const upload = require("../../utils/multer");

router.get("/", (req, res) => {
  Post.findAll({
    order: [["created_at", "DESC"]],
    attributes: [
      "id",
      "text",
      "user_id",
      "place",
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
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
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
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.post("/", (req, res) => {
//   Post.create({
//     text: req.body.text,
//     user_id: req.body.user_id,
//     is_contest: req.body.is_contest,
//     place: req.body.place,
//   })
//     .then((dbPostData) => res.json(dbPostData))
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

router.post("/", upload.single("image"), async (req, res) => {
  // Upload image to cloudinary
  console.log("-----------------");
  if (!req.file) {
    console.log("No picture upload");
    Post.create({
      text: req.body.text,
      user_id: req.body.user_id,
      is_contest: req.body.is_contest,
      place: req.body.place,
    })
      .then((dbPostData) => res.json(dbPostData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  } else {
    try {
      const result = await cloudinary.uploader.upload(req.file.path);
      //console.log(req.file.path);
      //console.log(cloudinary);

      //const result = await cloudinary.uploader(req.file.path);
      // cloudinary.v2.uploader.upload(req.file.path, function (error, result) {
      //   console.log(result, error);
      // });
      // Create new user

      // let user = new User({
      //   name: req.body.name,
      //   avatar: result.secure_url,
      //   cloudinary_id: result.public_id,
      // });
      // // Save user
      // await user.save();
      // res.json(user);
      Post.create({
        text: req.body.text,
        user_id: req.body.user_id,
        is_contest: req.body.is_contest,
        place: req.body.place,

        name: req.body.name,
        avatar: result.secure_url,
        cloudinary_id: result.public_id,
      })
        //.then((dbPostData) => res.render("dashboard", { dbPostData }))
        .then((dbPostData) => {
          const post = dbPostData.get({ plain: true });
          console.log(post);
          res.render("single-post", { post });
        })
        //.then((dbPostData) => res.json(dbPostData))
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
    } catch (err) {
      console.log(err);
    }
  }
});

//reaction
router.put("/upreaction", (req, res) => {
  Post.upvote(req.body, { Reaction })
    .then((updatedPostData) => res.json(updatedPostData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put("/:id", (req, res) => {
  Post.update(
    {
      text: req.body.text,
      place: req.body.place,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "Neo-Pet found a post with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "Neo-Pet found a post with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
