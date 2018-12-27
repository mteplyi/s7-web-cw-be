require('dotenv/config');
const cors = require('cors');
const app = require('express')();
const bb = require('express-busboy');

const db = require('./utils/db');

app.use(cors());
bb.extend(app);

app.get('/notes', async (req, res) => {
  res.send(await db.get());
});

app.post('/notes', async (req, res) => {
  const note = req.body;
  const trueNoteId = await db.create(note);
  res.send({ id: trueNoteId });
});

app.put('/notes/:noteId', async (req, res) => {
  const { noteId: id } = req.params;
  const { text } = req.body;
  await db.update({
    id,
    text,
  });
  res.sendStatus(200);
});

app.delete('/notes/:noteId', async (req, res) => {
  const { noteId } = req.params;
  await db.remove(noteId);
  res.sendStatus(200);
});

const { PORT = 3000 } = process.env;
app.listen(PORT, () => console.log(`Listening on ${PORT}...`));
