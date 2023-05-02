const quotes = require('../data/quotes');

const getAllQuotes = (req, res, next) => {
    return res.status(200).json({
      message: quotes,
    });
};

const getRandomQuote = (req, res, next) => {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return res.status(200).json({
      message: quotes[randomNumber],
    });
};

module.exports = { getAllQuotes, getRandomQuote };
