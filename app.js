const express = require('express')
const expressEjsLayout = require("express-ejs-layouts");
const auth = require('./routes/auth')
const home = require('./routes/home')
const sequelize = require("./utility/database");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);


const app = express();
app.use(
  session({
    secret: "keyboard cat",
    store: new SequelizeStore({
      db: sequelize,
    }),
    resave: false,
    proxy: true,
    saveUninitialized:false 
  })
);
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(expressEjsLayout)
app.set("layout", "layout/template");
app.use(express.urlencoded({ extended: false }));
app.use(auth,home)


sequelize
  .sync()
  .then(() => {
    app.listen(3000, function () {
      console.log("app is running on port 3000");
    });
  })
  .catch((err) => console.log(err));
