const exp = require("constants");
const express = require("express");
const routes = require("./controllers");
const path = require("path");
const sequelize = require("./config/connection");

const app = express();
// Handlebars templates
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
// Set the handlebars engine
app.set("view engine", "handlebars");
app.engine("handlebars", hbs.engine);

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.use(express.static(path.join(__dirname, "public")));

//sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => console.log("Now listening"));
//});
