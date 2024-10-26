const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));


const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

const User = mongoose.model('User', userSchema);

app.get('/', async (req, res) => {
    res.sendFile('index.html', { root: '../dist', index: 'index.html' })
})

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const chipherPassword = await bcrypt.hash(password, 10);

    const user = new User({
        username,
        password: chipherPassword
    });
    console.log(user);
    try {
        await user.save();
        res.send('User Registered');
    } catch (err) {
        console.log(err);
        res.status(400).send('Error registering user');
    }
})



app.listen(PORT, () => console.log(`Listening on port ${PORT}`))