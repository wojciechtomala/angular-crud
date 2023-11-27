// Load EVENT model:
const Event = require('../../db/models/event');

class EventActions{
    // SAVE EVENT:
    async saveEvent(req, res) {
        try {
            const title = req.body.title;
            const body = req.body.body;
            // New event:
            const event = new Event({title: title, body: body});
            // Save to database + callback:
            await event.save();
            console.log('Saved event:', event);
            res.status(201).json(event);
        } 
        catch (error) {
            console.error('Error saving event:', error);
            res.status(500).json({ error: 'Error saving event' });
        }
      }

    // GET ALL EVENTS:
    async getAllEvents(req,res){
        let doc;
        try{
            doc = await Event.find({});
        }catch(err){
            return res.status(500).json({message:err.message});
        }
        res.status(200).json(doc);
    }

    // GET SINGLE EVENT:
    async getEvent(req,res){
        const id = req.params.id;
        const event = await Event.findOne({_id:id});
        res.status(200).json(event);
    }

    // UPDATE SINGLE EVENT:
    async updateEvent(req,res){
        const id = req.params.id;
        const title = req.body.title;
        const body = req.body.body;

        const event = await Event.findOne({_id:id});
        event.title = title;
        event.body = body;
        await event.save();
        res.status(201).json(event);
    }

    // DELETE SINGLE EVENT:
    async deleteEvent(req,res){
        const id = req.params.id;
        await Event.deleteOne({_id:id});
        res.status(204).send();
    }
}

module.exports = new EventActions();