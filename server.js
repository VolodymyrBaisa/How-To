const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    partialsDir: path.join(__dirname, "/views/partials/"),
  })
);

app.set("view engine", "handlebars");
var routes = require("./routes/api-routes/index");

app.use(routes);
app.listen(PORT, () => {
  console.log("🌎 => live on http://localhost:%s", PORT);
});
