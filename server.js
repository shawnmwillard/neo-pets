const exp = require("constants");
const express = require("express");
const routes = require("./controllers");
const path = require("path");
const sequelize = require("./config/connection");
const { cloudinary } = require("./config/cloudinary");
const session = require("express-session");

const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3004;

const sess = {
  secret: "Neo Pets Secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.use(session(sess));
// Handlebars templates
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
// Set the handlebars engine

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

//sequelize.sync({ force: false }).then(() => {
//app.listen(PORT, () => console.log("Now listening"));
//});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now Listening"));
});
