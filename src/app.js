import express from "express";
import { create } from "express-handlebars";
import path from "path";
import passport from "passport";
import morgan from "morgan";
import flash from "connect-flash";
import session from "express-session";
import methodOverride from "method-override";
import MongoStore from "connect-mongo";
import { createAdminUser } from "./libs/createUser";
import config from "./config";

import indexR from "./routers/index.routes";
import userRouters from "./routers/admin.routes";
import patientsRouter from "./routers/patients.routes"
import "./config/passport"

const app = express();
// createAdminUser();

//sett
app.set("port", config.PORT);
app.set("views", path.join(__dirname, "views"));

const exphbs = create({
  extname: ".hbs",
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialsDir: path.join(app.get("views"), "partials"),
  defaultLayout: "main",
});

app.engine(".hbs", exphbs.engine);
app.set("view engine", ".hbs");

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: config.MONGODB_URI }),
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Global Variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  res.locals.user = req.user || null;
  next();
});

//Routes
app.use(indexR);
app.use(userRouters);
app.use(patientsRouter);

// static files
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res) => {
  res.render("404");
});

export default app;
