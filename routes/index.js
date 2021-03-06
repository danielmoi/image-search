/* eslint-disable camelcase */
const express = require('express');
const axios = require('axios');
const qs = require('qs');
const moment = require('moment');

const { Search } = require('../models');

const router = express.Router();

router.get('/health', (req, res) => {
  res.send('OK');
});


router.get('/api/imagesearch/latest', async (req, res) => {
  const results = await Search.findAll({
    limit: 10,
    order: [['createdAt', 'DESC']],
  });
  const data = results.map(r => ({
    searchString: r.searchString,
    searchTime: moment(r.createdAt).toISOString(),
  }));
  res.send(data);
});


router.get('/api/imagesearch/:search', async (req, res) => {
  const { search } = req.params;
  const { query } = req;

  const qst = qs.stringify({
    q: search,
    offset: query.offset,
  });

  await Search.create({
    searchString: search,
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

router.get('/*', (req, res) => {
  const protocol = req.protocol;
  const host = req.headers.host;

  const url = `${protocol}://${host}`;
  const suggest = `${url}/api/imagesearch/kittens`;
  const latest = `${url}/api/imagesearch/latest`;

  res.send({
    try_this: suggest,
    or_this: latest,
  });
});


module.exports = router;
