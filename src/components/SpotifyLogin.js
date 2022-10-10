import React, { useEffect, useState } from "react";

const CLIENT_ID = 'ca2f77c2d53d499eb58ebf742d9fddb2';
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-read-playback-state`;
const CLIENT_SECRET = 'fa41901b5efa4c5ba8c5fca8ead611e8';
const REDIRECT_URI = 'http://localhost:3000';


export default function SpotifyLogin() {
    const [accessToken, setAccessToken] = useState('')

    // const RESPONSE_TYPE = 'token';

    useEffect(() => {
        // API Access Token
        var authParameters = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant-type=client_credentials&client_id=' + CLIENT_ID + '&client-secret=' + CLIENT_SECRET
        }
        fetch('https://accounts.spotify.com/api/token', authParameters)
            .then(result => result.json())
            .then(data => setAccessToken(data.access_token))
    }, [])

    return (
        <div>
            <a className="btn btn-success btn-lg" href={AUTH_URL}>Login with Spotify</a>
        </div >
    )

}