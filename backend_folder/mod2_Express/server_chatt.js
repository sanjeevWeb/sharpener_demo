const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/login', (req, res) => {
    res.send(`
        <form action="/admin/username" method="POST">
            <input type="text" name="username" id="username">
            <button type="submit">Login</button>
        </form>
    `);
});

app.post('/admin/username', (req, res) => {
    const { username } = req.body;
    // Store the username in local storage
    res.cookie('username', username);
    res.redirect('/');
});

app.use('/', (req, res) => {
    const username = req.cookies.username;
    const { content } = req.body;

    if (!username) {
        // If no username is set, redirect to the login page
        return res.redirect('/login');
    }

    if (content) {
        // Append the message to a file with the sender's username
        fs.appendFileSync('messages.txt', `${username}: ${content}\n`, (err) => {
            if (err) {
                console.error(err);
            }
        });
    }

    // Read and display the chat messages
    const dataFromFile = fs.readFileSync('messages.txt', 'utf-8');
    res.send(`
        Chat Messages:<br>${dataFromFile}<br>
        <form action="/" method="POST">
            <input type="text" name="content">
            <button type="submit">Send</button>
        </form>
    `);
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
