import React, { useEffect } from "react";
import useAuth from "./useAuth";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
    clientId: 'ca2f77c2d53d499eb58ebf742d9fddb2',
})

export default function SpotifyPlayer({ code }, { description }) {
    const accessToken = useAuth(code);
    const playlistTopic = description;

    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    useEffect(() => {
        if (!playlistTopic) return
        if (!accessToken) return

        spotifyApi.searchPlaylists(playlistTopic)
            .then(function (data) {
                console.log('Found playlists are', data.body);
            }, function (err) {
                console.log('Something went wrong!', err);
            });

    }, [playlistTopic, accessToken])


    return (
        <div>
            <div>Music is playing</div>
            <div>artist</div>
            <div>song</div>
            <div>album art</div>
            <div>controls</div>
        </div>
    )
}