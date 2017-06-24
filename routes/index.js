/* eslint-disable camelcase */
const express = require('express');
const axios = require('axios');
const qs = require('qs');

const router = express.Router();

router.get('/health', (req, res) => {
  res.send('OK');
});


router.get('/api/imagesearch/:search', async (req, res) => {
  const { search } = req.params;
  const { query } = req;
  console.log('search:', search);
  console.log('query:', query);

  const qst = qs.stringify({
    q: search,
    offset: query.offset,
  });

  console.log('process.env.BING_SUBSCRIPTION_KEY:', process.env.BING_SUBSCRIPTION_KEY);

  const result = await axios({
    method: 'GET',
    url: `https://api.cognitive.microsoft.com/bing/v5.0/images/search?${qst}`,
    headers: {
      'Ocp-Apim-Subscription-Key': process.env.BING_SUBSCRIPTION_KEY,
    },
  });

  console.log('result:', result);

  const data = result.data.value.map(r => ({
    altText: r.name,
    imageUrl: r.contentUrl,
    pageUrl: r.hostPageUrl,
  }));
  console.log('result:', result);

  res.json(data);
});


module.exports = router;
