import React from "react";
import useAuth from "./useAuth";

export default function SpotifyPlayer({ code }) {
    const accessToken = useAuth(code)
    return (
        <div>
            <div>Music is playing</div>
        </div>
    )
}