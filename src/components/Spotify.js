import React from "react";
import SpotifyLogin from "./SpotifyLogin";
import MySpotifyPlayer from "./MySpotifyPlayer";

const code = new URLSearchParams(window.location.search).get('code');

export default function Spotify(props) {
    console.log(code);
    console.log(props);
    console.log(props.data.description);
    let desc = props.data.description;
    return code ? <MySpotifyPlayer code={code} search={desc} /> : <SpotifyLogin />
}