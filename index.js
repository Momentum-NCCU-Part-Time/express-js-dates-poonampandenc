const express = require("express");
const morgan = require("morgan");
// const dates = require("dayjs");
const dayjs = require("dayjs");
dayjs().format()

const port = 3000;

const app = express();

app.use(morgan("dev"));

var now = dayjs()

app.get("/api/dates/", (req, res) => {
  res.json({ date: `${dates [dayjs().format(dddd, MMMM D, YYYY)]}` });
});

// app.get('/api/emoji/:name', (req, res) => {
    // check if there is an emoji by that name
    // const requestedEmoji = emoji.find(req.params.name)
    // will look like {emoji: '🐷', key: 'pig'} if found
    // if not found, will be undefined
    // if (requestedEmoji) {
      // return the json with the emoji
    //  res.json(requestedEmoji)
   // } else {
      // else return 404 and maybe json??
    //  res.status(404).json({ error: 'No emoji with that name' })
    //}
  // });
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });