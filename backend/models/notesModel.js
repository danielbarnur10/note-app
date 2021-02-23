const mongoose = require("mongoose");

const notesSchema = {
    id: String,
    title: String,
    content: String
}

const Note = mongoose.model("Note", notesSchema);

module.exports = Note;