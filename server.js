const express = require('express');
const next = require('next');
const helmet = require('helmet');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const slugify = require("slugify");

console.log(process.env.MONGO_USER, process.env.MONGO_PWD);

mongoose.Promise = global.Promise;
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

const noteSchema = new mongoose.Schema({
  id: { type: String, required: true },
  msg: { type: String },
  x: { type: Number, required: true },
  y: { type: Number, required: true }
});

const SharedNotes = mongoose.model("sharedNotes", new mongoose.Schema({
  customLinkText: { type: String, required: true },
  notes: { type: [noteSchema], required: true }
}));

app.prepare()
  .then(() => {
    const server = express();
    if (server.get('env') === 'production') server.set('trust proxy', 1);
    server.use(helmet());
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: false }));

    server.post('/share', async (req, res) => {
      if (!req.body.customLinkText) return res.status(400).end("You need to provide a text for the URL!");
      if (req.body.customLinkText.length > 100) return res.status(406).end("The text provided is too long!");

      const sluggedValue = slugify(req.body.customLinkText, {
        replacement: '-',
        remove: null,
        lower: true
      });

      if (!sluggedValue) return res.status(406).end("The text provided cannot be turned into a proper URL, choose a different one!");

      try {
        await SharedNotes.create(req.body);
      } catch (e) {
        console.error("xd23232323232323", e);
      }

      return handle(req, res);
    });

    server.get('/shared/:id', async (req, res) => {
      const notes = await SharedNotes.findOne({ customLinkText: req.params.id });
      return app.render(req, res, '/', notes || { notes: [] });
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    const port = process.env.PORT || 8080;
    server.listen(port, () => console.log(`Express server listening on port ${port}`));
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });