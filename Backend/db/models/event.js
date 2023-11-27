const mongoose = require('mongoose');
const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});
const Event = mongoose.model('Event', EventSchema);
// Export module:
module.exports = Event;
