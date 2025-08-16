// server.js
const express = require('express');
const cors = require('cors'); // allows browser fetch from other origins
const app = express();
app.use(cors());

const sampleWords = ["Wake","Buy","Call","Fix","Read","Write","Plan","Cook","Learn","Email"];
const samplePhrases = [
  "Do this right now.",
  "Remember to finish this task.",
  "This will take 10 minutes.",
  "High priority: handle ASAP.",
  "Follow up with team.",
  "Quick reminder to check logs."
];

const rand = arr => arr[Math.floor(Math.random() * arr.length)];

function makeTodo() {
  return {
    title: `${rand(sampleWords)} ${rand(sampleWords)}`,
    content: rand(samplePhrases)
  };
}

app.get('/todos', (req, res) => {
  const count = Math.floor(Math.random() * 5) + 1; // 1–5 todos
  const todos = Array.from({ length: count }, makeTodo);
  res.json(todos); // returns an array (so call AddToDo(upd) in your client)
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}/todos`));