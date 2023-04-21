const express = require("express");
const app = express();
const { db } = require("./db");
const PORT = 3001;
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/v3/posts", (req, res) => {
  let queryUser = req.query;
  let search = queryUser.query;
  console.log("req.query", queryUser.query);
  let dataToClient = db.posts.map(({ email, ...rest }) => rest);
  if (search) {
    let searchRegExp = new RegExp(search, "i");
    dataToClient = dataToClient.filter((post) => searchRegExp.test(post.title));
  }
  res.json(dataToClient);
});

app.get("/api/v3/posts/:id", (req, res) => {
  const { id } = req.params;
  const person = db.posts.find((post) => (post.id = id));
  if (person) {
    return res.json(person);
  } else {
    res.sendStatus(404);
  }
});

app.delete("/api/v3/posts/:id", (req, res) => {
  const { id } = req.params;
  const deletePersonIndex = db.posts.findIndex((post) => post.id === id);
  if (deletePersonIndex >= 0) {
    db.posts.splice(deletePersonIndex, 1);
    return res.sendStatus(200);
  } else {
    return res.sendStatus(404);
  }
});

app.post("/api/v3/posts", (req, res) => {
  const dataFromClient = req.body;
  if (!Object.values(dataFromClient).every((value) => !!value)) {
    return res.sendStatus(400);
  }
  const newPost = {
    ...dataFromClient,
    id: uuidv4(),
  };

  db.posts.push(newPost);
  return res.json(newPost);
});

app.listen(PORT, () => {
  console.log(`Server has been started on port: ${PORT}`);
});
