const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();

app.use(cors());
app.use(bodyParser.json());


app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: 'ca2f77c2d53d499eb58ebf742d9fddb2',
        clientSecret: 'aab9794a26bb4f2c8d07d23bedeeb4be'
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
        .catch((err) => {
            console.log(err);
            res.sendStatus(400);
        })
})

app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: 'ca2f77c2d53d499eb58ebf742d9fddb2',
        clientSecret: 'aab9794a26bb4f2c8d07d23bedeeb4be'
    })

    spotifyApi.refreshAccessToken().then(
        data => {
            console.log(data.body);
            res.json({
                accessToken: data.body.accessToken,
                expiresIn: data.body.expiresIn,
            })
        }).catch((err) => {
            console.log(err);
            res.sendStatus(400)
        })
})

app.listen(3011)