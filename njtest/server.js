const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: 'ca2f77c2d53d499eb58ebf742d9fddb2',
        clientSecret: 'fa41901b5efa4c5ba8c5fca8ead611e8'
    })

    spotifyApi.refreshAccessToken().then(
        data => {
            console.log(data.body);
            res.json({
                accessToken: data.body.accessToken,
                expiresIn: data.body.expiresIn,
            })
        }).catch(() => {
            res.sendStatus(400)
        })
})

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: 'ca2f77c2d53d499eb58ebf742d9fddb2',
        clientSecret: 'fa41901b5efa4c5ba8c5fca8ead611e8'
    })

    spotifyApi
        .authorizationCodeGrant(code)
        .then(data => {
            res.json({
                accessToken: data.body.access_token,
                refreshToken: data.body.refresh_token,
                expiresIn: data.body.expires_in,
            })
        })
        .catch(() => {
            res.sendStatus(400)
        })
})

app.listen(3001)