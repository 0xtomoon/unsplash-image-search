require('dotenv').config()
const nodeFetch = require('node-fetch');
const { createApi } = require('unsplash-js');
const unsplash = createApi({
    accessKey: process.env.UNSPLASH_KEY,
    fetch: nodeFetch
});

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/images/:keyword', (req, res) => {
    unsplash.search.getPhotos({
        query: req.params.keyword,
        page: 1,
        perPage: 10,
        orientation: 'portrait',
    })
    .then((result) => {
        res.send(result.response.results);
    })
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
