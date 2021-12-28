const express = require("express");
import { indexRouter } from "./routes/index.routes";
const exphbs = require('express-handlebars');
const path = require('path');
const Ove = require("method-override");
const flash = require("connect-flash");
const session = require("express-session");
const res = require("express/lib/response");
// const multer = require("multer");
// const storage =multer.diskStorage({
//     destination: path.join(__dirname,'public/uploads'),
//     filename: (req,file,cb)=>{
//         cb(null,Date.now()+'_'+file.originalname)
//     }
// });
//ini
const app = express();
//sett
app.set('port', process.env.PORT || 4000);
app.set('views',path.join(__dirname, 'views'));
// app.engine('.hbs',exphbs({
//     defaultLayout: 'main',
//     layoutsDir: path.join(app.get('views'), 'layouts' ),
//     partialsDir:  path.join(app.get('views'), 'partials' ),
//     extname: '.hbs'
// }));
app.set('view engine','.hbs');
//middlewares
app.use(express.urlencoded({extended:false}));
// app.use(morgan('dev'));
app.use(Ove('_method'));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());
// app.use(multer({
//     storage,
//     dest :  path.join(__dirname, 'public/uploads/')
// }).single('image'));

//global vars

//routes
app.use(indexRouter)
//static files
app.use(express.static(path.join(__dirname,'public')));

module.exports = app;