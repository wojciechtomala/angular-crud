const express = require('express');
const router = express.Router();
const eventActions = require('../actions/api/eventActions');

// GET ALL EVENTS:
router.get('/events',eventActions.getAllEvents);
// GET SINGLE EVENT:
router.get('/event/:id',eventActions.getEvent);
// SAVE EVENT:
router.post('/events',eventActions.saveEvent);
// EDIT EVENT:
router.put('/events/:id',eventActions.updateEvent);
// DELETE EVENT:
router.delete('/events/:id',eventActions.deleteEvent);

module.exports = router;