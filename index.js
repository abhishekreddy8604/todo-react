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

app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "Sorry! wrong inputs",
    });
    return;
  }

  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  experss.response.json({
    msg: "Todo Created",
  });
});

app.get("/todos", async function (req, res) {
  const todos = await todo.find({});

  res.json({
    msg: "Todo created",
  });
});

app.put("/completed", async function (req, res) {
  const updateTodo = req.body;
  const parsePayload = updateTodo.safeParse(updateTodo);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "Sorry! wrong inputs",
    });
    return;
  }

  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Todo marked as completed",
  });
});
