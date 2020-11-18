const config = require("./config");
const express = require("express");
const path = require("path");
const db = require("./models");
const apiRoutes = require("./routes/api-routes");
const htmlRoutes = require("./routes/html-routes");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");
const helpers = require("./views/helpers");

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    partialsDir: path.join(__dirname, "/views/partials/"),
    helpers: helpers,
  })
);

app.set("view engine", "handlebars");
var routes = require("./routes/api-routes/index");

app.use("/api", apiRoutes);
app.use(htmlRoutes);

db.sequelize.sync(/*{ force: config.sync }*/).then(async () => {
  app.listen(PORT, () => {
    console.log(`🌎 => live on http://localhost:${PORT}`);
  });
});
