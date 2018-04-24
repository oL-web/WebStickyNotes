const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    id: { type: String, required: true },
    msg: { type: String, default: "" },
    x: { type: Number, required: true },
    y: { type: Number, required: true }
  });
  
  const SharedNotes = mongoose.model("sharedNotes", new mongoose.Schema({
    customLinkText: { type: String, required: true },
    notes: {
      type: [noteSchema],
      required: true,
      validate: { validator: function () { return this.notes.length } },
    }
  }));

  module.exports = SharedNotes;