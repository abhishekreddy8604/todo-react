// write basic express boilerplate code,
// with express.json() middleware

const experss = require("express");
const app = express();
const port = 3000;

app.use(exoress.json());

// body {
//title: string;
//description: string;

//}

app.post("/todo", function (req, res) {});

app.get("/todos", function (req, res) {});

app.put("/completed", function (req, res) {});
