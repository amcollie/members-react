const express = require('express');
const cors = require('cors');

// const db = require('./queries');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/members', require('./api/members'));

app.get('/', (req, res) => {
    res.status(200).json('Welcome to Members API');
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});