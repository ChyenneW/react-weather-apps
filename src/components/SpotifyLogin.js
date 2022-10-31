import React from "react";


const CLIENT_ID = 'ca2f77c2d53d499eb58ebf742d9fddb2';
const REDIRECT_URI = 'https://react-spotify-weatherapp.netlify.app/';
const SCOPES = 'streaming%20user-read-email%20user-read-private%20user-read-playback-state%20user-library-read%20user-library-modify%20user-modify-playback-state';
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}`;


export default function SpotifyLogin() {
    return (
        <div>
            <a className="btn btn-success btn-lg" href={AUTH_URL}>Login with Spotify</a>
        </div >
    )

}