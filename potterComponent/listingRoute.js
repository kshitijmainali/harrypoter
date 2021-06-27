const express = require('express');

const Route = express.Router();

const listingController = require('./listingController');

Route.route('/').get(listingController);
module.exports = Route;
