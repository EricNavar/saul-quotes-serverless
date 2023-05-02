const express = require('express');
const router = express.Router();

const {
  getAllQuotes,
  getRandomQuote,
} = require('../controllers/quotes');

router.route('/').get(getAllQuotes);
router.route('/random').get(getRandomQuote);

module.exports = router
