const exp = require("constants");
const express = require("express");
const routes = require("./controllers");
const path = require("path");
const sequelize = require("./config/connection");
const { cloudinary } = require('./config/cloudinary');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.use(express.static(path.join(__dirname, "public")));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
