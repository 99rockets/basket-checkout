import express from 'express';

const app = express();
const port = 3001;

/** Open data from: https://fakestoreapi.com/products */
const data = require('../data/products.json');

app.get('/products', (req, res) => {
	// Disable CORS for development
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.json(data);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
