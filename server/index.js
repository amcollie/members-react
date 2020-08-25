const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();
const ENV = process.env.NODE_DEV;
const PORT = process.env.PORT || 3001;
console.log(ENV);
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/build')));

app.use('/members', require('./api/members'));

app.get('/members', (req, res) => {
    res.status(200).json('Welcome to Members API');
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
