import React, { useEffet } from "react";
import useAuth from "./useAuth";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
    clientId: 'ca2f77c2d53d499eb58ebf742d9fddb2',
})

export default function SpotifyPlayer({ code }) {
    const accessToken = useAuth(code);

    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    return (
        <div>
            <div>Music is playing</div>
        </div>
    )
}