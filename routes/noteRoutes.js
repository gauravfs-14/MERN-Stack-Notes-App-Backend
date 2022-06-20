const express = require("express");
const router = express.Router();
const {
  getNote,
  postNote,
  getOneNote,
  patchNote,
  deleteNote,
} = require("../controllers/userControllers");

router.route("/").post(postNote).get(getNote);
router.route("/:id").get(getOneNote).patch(patchNote).delete(deleteNote);

module.exports = router;
