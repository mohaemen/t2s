require('dotenv').config();
const express = require('express');
const { CommunicationIdentityClient } = require("@azure/communication-identity");

const app = express();
const port = process.env.PORT || 3000;
const connectionString = process.env.ACS_CONNECTION_STRING;
const identityClient = new CommunicationIdentityClient(connectionString);

app.use(express.static('public')); // Serve frontend files

app.get('/token', async (req, res) => {
    try {
        const user = await identityClient.createUser();
        const { token } = await identityClient.getToken(user, ["voip"]);
        res.json({ userId: user.communicationUserId, token });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
