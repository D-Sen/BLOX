const express = require('express');
const router = express.Router();
const performersCtrl = require('../controllers/performers');
const ensureLoggedIn = require('../config/ensureLoggedIn')

// This router is mounted to a "starts with" path of '/'

// GET /performers/new
router.get('/performers/new', ensureLoggedIn, performersCtrl.new);
// POST /performers
router.post('/performers', ensureLoggedIn,  performersCtrl.create);
router.post('/movies/:id/performers', performersCtrl.addToCast)


module.exports = router;