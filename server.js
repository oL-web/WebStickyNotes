const express = require('express');
const next = require('next');
const helmet = require('helmet');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const slugify = require("slugify");

const SharedNotes = require("./models/sharedNotes");


mongoose.connect(`mongodb://ds151259.mlab.com:51259/localnotes`, {
  keepAlive: true,
  auth: {
    user: process.env.MONGO_USER,
    password: process.env.MONGO_PWD
  }
})
  .then(() => console.log('connection successful'))
  .catch((err) => console.error(err));

const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  if (server.get('env') === 'production') server.set('trust proxy', 1);
  server.use(helmet());
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));

  server.post('/share', async (req, res) => {
    try {
      const notes = new SharedNotes(req.body);
      notes.customLinkText = slugify(notes.customLinkText, {
        replacement: '-',
        remove: null,
        lower: true
      });
      const customLinkExists = await SharedNotes.findOne({ customLinkText: notes.customLinkText });
      if (customLinkExists) return res.status(409).end("Notes cannot be shared - this URL already exists!");
      await notes.validate();
      await notes.save();

      return res.status(201).end("Notes successfully shared!");
    }
    catch (e) {
      return res.status(400).end("Incomplete or incorrect notes data provided!");
    }
  });

  server.get('/shared/:id', async (req, res) => {
    const notes = await SharedNotes.findOne({ customLinkText: req.params.id });
    return app.render(req, res, '/', notes || { notes: [] });
  });

  server.get("/sw.js", (req, res) => {
    return res.sendFile(__dirname + "/static/sw.js");
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 8080;
  server.listen(port, () => console.log(`Express server listening on port ${port}`));
});