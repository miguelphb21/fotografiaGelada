const express = require('express')
const router = express.Router()
const fgcontrollers = require('../controllers/fgcontrollers.js')

router.post('/', fgcontrollers.adicionarInfo);

module.exports = router;