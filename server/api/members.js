const express = require('express');

const Members = require('../models/members');

const router = express.Router();

router.get('/', Members.retrieveAll);
router.get('/:id', Members.retrieveById);
router.put('/:id', Members.updateById);
router.post('/', Members.insert);
router.delete('/:id', Members.deleteById);

module.exports = router;