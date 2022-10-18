import React from "react";
import SpotifyLogin from "./SpotifyLogin";
import SpotifyPlayer from "./SpotifyPlayer";

const code = new URLSearchParams(window.location.search).get('code');

export default function Spotify() {
    return code ? <SpotifyPlayer code={code} /> : <SpotifyLogin />
}