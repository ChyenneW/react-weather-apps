import React, { useEffect, useState } from "react";
import useAuth from "./useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import SpotifyPlayer from "react-spotify-web-playback";

const spotifyApi = new SpotifyWebApi({
    clientId: 'ca2f77c2d53d499eb58ebf742d9fddb2',
})

export default function MySpotifyPlayer(props) {
    const accessToken = useAuth(props.code);
    console.log(props.search);
    const playlistTopic = props.search;

    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    useEffect(() => {
        spotifyApi.searchTracks(playlistTopic)
            .then(function (data) {
                console.log('found', data.body);
            }, function (err) {
                console.log('Something went wrong!', err);
            });
    }, [playlistTopic, accessToken])



    return (
        <div>
            <div>{playlistTopic}</div>
            <div>artist</div>
            <div>song</div>
            <div>art</div>
            <div>controls</div>
            <SpotifyPlayer
                token={accessToken}
                showSaveIcon
                uris={trackUri ? [trackUri] : []}
            />
        </div>
    )
}