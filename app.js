const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require('./db/database');
const User = require('./util/user');

const app = express();

app.use(express.static(path.join(__dirname, 'views')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post("/", async (req, res) => {
    try {
        const { name, email, phone_number, bus_number } = req.body;
        const user = await User.create({ name, email, phone_number, bus_number });
        res.send('Registration Done with ID: ' + user.id);
    } catch (error) {
        console.error("Error inserting data: ", error);
        res.status(500).send("Server error");
    }
});

app.get("/users", async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.error("Error fetching users: ", error);
        res.status(500).send("Server error");
    }
});

app.put("/users/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const { name, email, phone_number, bus_number } = req.body;
        await User.update({ name, email, phone_number, bus_number }, {
            where: { id: userId }
        });
        res.send('Booking updated');
    } catch (error) {
        console.error("Error updating user: ", error);
        res.status(500).send("Server error");
    }
});

app.delete("/users/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        await User.destroy({ where: { id: userId } });
        res.send('Booking deleted');
    } catch (error) {
        console.error("Error deleting user: ", error);
        res.status(500).send("Server error");
    }
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");

    sequelize.sync()
        .then(() => {
            console.log('Database synced');
        })
        .catch(err => {
            console.error('Error syncing database: ', err);
        });
});

