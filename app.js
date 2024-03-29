const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
const fileUpload = require('express-fileupload');
const methodOverride = require("method-override");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const entriesRouter = require("./routes/entries");
const organizationsRouter = require("./routes/organizations");
const testimonialsRouter = require("./routes/testimonials");

const activitiesRouter = require("./routes/activities");
const categoriesRouter = require('./routes/categories');
const authRouter = require("./routes/auth");
const membersRouter = require("./routes/members");
const contactsRouter = require("./routes/contacts");
const uploadRouter = require('./routes/upload');
const slideRouter = require('./routes/slide');


const app = express();
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

app.use(fileUpload({
  useTempFiles : true,
  tempFileDir : '/tmp/',
}));

app.use("/api", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/entries", entriesRouter);
app.use("/api/organizations", organizationsRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/testimonials", testimonialsRouter);
app.use("/api/activities", activitiesRouter);
app.use("/api/auth", authRouter);
app.use("/api/members", membersRouter);
app.use("/api/contacts", contactsRouter);
app.use('/api/upload', uploadRouter);
app.use('/api/slide', slideRouter);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
