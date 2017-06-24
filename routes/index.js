/* eslint-disable camelcase */
const express = require('express');

const router = express.Router();

router.get('/health', (req, res) => {
  res.send('OK');
});


router.get('/api/imagesearch/:search', (req, res) => {
  const { search } = req.params;
  const { query } = req;
  console.log('search:', search);
  console.log('query:', query);
  res.json({
    it: 'works',
  });
});


module.exports = router;
