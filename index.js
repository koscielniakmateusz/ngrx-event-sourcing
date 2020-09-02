const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const events = [
];

app.get('/api/event', (req, res)  => {

});

app.post('/api/event', (req, res)  => {
    try {
        const event = req.body.event;
        event.id = events.length + 1;
        events.push(event);
        res.status(200).json(events);
    } catch (err) {
        res.status(400).json({ message: 'Bad request.' });
    }
});

const port = 3000;
app.listen(port, () => console.log(`Started on localhost:${port} !`));

setInterval(() => {
    console.log(events)
}, 2000);