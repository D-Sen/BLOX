const express = require('express')
const router = express.Router()
const messagesCtrl = require('../controllers/messages')
const ensureLoggedIn = require('../config/ensureLoggedIn') 

router.post('/blocks/:id/messages', ensureLoggedIn, messagesCtrl.create)
router.delete('/messages/:id', ensureLoggedIn, messagesCtrl.delete)


module.exports = router
