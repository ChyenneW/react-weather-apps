import React, { useEffect, useState } from "react";
import useAuth from "./useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import SpotifyPlayer from "react-spotify-web-playback";

import "./MySpotifyPlayer.css";

const spotifyApi = new SpotifyWebApi({
    clientId: 'ca2f77c2d53d499eb58ebf742d9fddb2',
})

export default function MySpotifyPlayer(props) {
    const accessToken = useAuth(props.code);
    console.log(props.search);
    const playlistTopic = props.search;

    let [trackUri, setTrackUri] = useState('');
    let [artist, setArtist] = useState('');
    let [title, setTitle] = useState('');

    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    useEffect(() => {
        spotifyApi.searchTracks(playlistTopic)
            .then(function (data) {
                console.log('found', data.body);
                setTrackUri(data.body.tracks.items[0].uri);
                setArtist(data.body.tracks.items[0].artists[0].name);
                setTitle(data.body.tracks.items[0].name);

            }, function (err) {
                console.log('Something went wrong!', err);
            });
    }, [playlistTopic, accessToken])



    return (
        <div className="trackArea">
            <div className="trackInfo">
                <div>{artist}</div>
                <div>{title}</div>
            </div>
            <div className="trackPlayer">
                <SpotifyPlayer
                    token={accessToken}
                    showSaveIcon
                    uris={trackUri ? [trackUri] : []}
                />
            </div>
        </div>
    )
}