// write basic express boilerplate code,
// with express.json() middleware

const experss = require("express");
const { createTodo } = require("./types");
const app = express();
const port = 3000;

app.use(exoress.json());

// body {
//title: string;
//description: string;

//}

app.post("/todo", function (req, res) {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msh: "Sorry! wrong inputs",
    });
    return;
  }
});

app.get("/todos", function (req, res) {});

app.put("/completed", function (req, res) {
  const updateTodo = req.body;
  const parsePayload = updateTodo.safeParse(updateTodo);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "Sorry! wrong inputs",
    });
    return;
  }
});
