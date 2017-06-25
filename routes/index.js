/* eslint-disable camelcase */
const express = require('express');
const axios = require('axios');
const qs = require('qs');
const { Search } = require('../models');

const router = express.Router();

router.get('/health', (req, res) => {
  res.send('OK');
});


router.get('/api/imagesearch/latest', async (req, res) => {
  const results = await Search.findAll();
  console.log('results:', results);
  const data = await Search.create({
    searchString: 'Hello',
  });
  console.log('data:', data);
  res.send('Latest results!');
});


router.get('/api/imagesearch/:search', async (req, res) => {
  const { search } = req.params;
  const { query } = req;

  const qst = qs.stringify({
    q: search,
    offset: query.offset,
  });

  const result = await axios({
    method: 'GET',
    url: `https://api.cognitive.microsoft.com/bing/v5.0/images/search?${qst}`,
    headers: {
      'Ocp-Apim-Subscription-Key': process.env.BING_SUBSCRIPTION_KEY,
    },
  });

  const data = result.data.value.map(r => ({
    altText: r.name,
    imageUrl: r.contentUrl,
    pageUrl: r.hostPageUrl,
  }));

  res.json(data);
});


module.exports = router;
