const Note = require("../models/Note");

//POST Request @/api/notes
const postNote = async (req, res) => {
  if (!req.body.title || !req.body.description) {
    return res.status(400).send({
      message: "Please fill out the data!",
    });
  }
  try {
    const newNote = new Note({
      title: req.body.title,
      description: req.body.description,
    });
    if (newNote) {
      const note = await newNote.save();
      res.json(note);
    } else {
      res.json({ message: "Please provide Sufficient Data" });
    }
  } catch (error) {
    res.json({ message: error });
  }
};

//GET Request @/api/notes
const getNote = async (req, res) => {
  try {
    const note = await Note.find();
    res.send(note);
  } catch (error) {
    res.json({ message: error });
  }
};

//GET Request @/api/notes/:id
const getOneNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (note) {
      res.send(note);
    } else {
      res.json({ message: "Cannot locate the note" });
    }
  } catch (error) {
    res.json({ message: error });
  }
};

//PATCH Request @/api/notes/:id
const patchNote = async (req, res) => {
  if (!req.body.title || !req.body.description) {
    return res.status(400).send({
      message: "Please fill out the data",
    });
  }
  try {
    const note = await Note.findById(req.params.id);
    note.title = req.body.title;
    note.description = req.body.description;
    const newNote = await note.save();
    res.send(newNote);
  } catch (error) {
    res.json({ message: error });
  }
};

//DELETE Request @/api/notes/:id
const deleteNote = async (req, res) => {
  const note = await Note.findById(req.params.id);
  await note.remove();
  res.json({ message: "Deleted The Note" });
};

module.exports = {
  postNote,
  getNote,
  getOneNote,
  patchNote,
  deleteNote,
};
