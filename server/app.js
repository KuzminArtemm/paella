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
  let dataToClient = db.posts.map((rest) => rest);
  if (search) {
    let searchRegExp = new RegExp(search, "i");
    dataToClient = dataToClient.filter((post) => searchRegExp.test(post.title));
  }
  res.json(dataToClient);
});

app.get("/api/v3/posts/:id", (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const person = db.posts.find((post) => post.id === id);
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

//create new post

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

// signup

app.post("/api/v3/posts/signup", (req, res) => {
  const { lastName, firstName, email, password } = req.body;
  db.posts.push({
    person: {
      id: uuidv4(),
      lastName,
      firstName,
      email,
      password,
    },
  });
  console.log(db.posts);
  const newPerson = {
    ...req.body,
    token: uuidv4(),
  };
  res.json(newPerson);
});

// signin

app.post("/api/v3/posts/signin", (req, res) => {
  const { email, password } = req.body;
  console.log("req.body2", req.body);
  const currentUser = db.posts.find((obj) => obj.person.email === email);
  console.log("currentUser", typeof password);
  if (currentUser.person.password === password) {
    return res.json({
      ...currentUser,
      token: uuidv4(),
    });
  } else {
    return res.sendStatus(401);
  }
});

// leave a comment

app.post("/api/v3/posts/comment", (req, res) => {
  const newCommentData = req.body;

  if (!Object.values(newCommentData).every((value) => !!value)) {
    return res.sendStatus(400);
  }
  const newComment = {
    ...newCommentData,
    commentId: uuidv4(),
  };
  const currentUserComment = db.posts.find(
    (obj) => obj.id === newCommentData.id
  );
  console.log("currentUserComment", currentUserComment.comments);
  currentUserComment.comments.push(newComment);
  res.json(newComment);
});

app.listen(PORT, () => {
  console.log(`Server has been started on port: ${PORT}`);
});
