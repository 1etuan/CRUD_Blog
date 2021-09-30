const express = require("express");
const path = require("path");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const methodOverride = require("method-override");

// const SortMiddleware  = require('./app/middlewares/SortMiddleware')

const route = require("./routes");

const db = require("./config/db");

db.connect();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
//
app.use(
  express.urlencoded({
    extended: true,
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.use(express.json());

app.use(methodOverride("_method"));

// Custom Middlewares
// app.use(SortMiddleware);

// app.use(jQuery())

//
app.use(morgan("combined"));

//template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
      sortable: (field, sort) => {
        // const sortType = field === sort.column ? sort.type : "default";

        // const icons = {
        //   default: "fas fa-sort",
        //   asc: " fas fa-sort-amount-up-alt",
        //   desc: "fas fa-sort-amount-down",
        // };
        // const types = {
        //   default: "desc",
        //   asc: "desc",
        //   desc: "asc",
        // };
        // const icon = icons[sortType];
        // const type = types[sortType];

        // return `<a href="?_sort&column=${field}&type=${type}" class="${icon}"></a>`;
      },
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// route  init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
