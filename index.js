const serverless = require("serverless-http");
const express = require("express");
const app = express();
const quotes = require('./routes/quotes');

app.use('/api/quotes', quotes);

// app.use((req, res, next) => {
//   return res.status(404).json({
//     error: "Not Found",
//   });
// });

module.exports.handler = serverless(app);
