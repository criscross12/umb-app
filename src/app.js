import express from "express";
import { create } from "express-handlebars";
import path from "path";
import indexR from "./routers/index.routes";

const app = express();

//sett
app.set("views", path.join(__dirname, "views"));

const exphbs = create({
  extname: '.hbs',
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialsDir: path.join(app.get("views"), "partials"),
  defaultLayout:'main'
});

app.engine(".hbs", exphbs.engine);
app.set("view engine", ".hbs");


//Routes
app.use(indexR);

export default app;
