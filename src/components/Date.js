import React from "react";

export default function DateInfo() {
    let now = new Date();

    const days = ["Sunday", "Monday", "Tuesday", "Wendsday", "Thursday", "Friday", "Saturday"];
    let day = days[now.getDay()];

    const months = ["January", "Feburary", "March", "April", "May", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[now.getMonth()];
    let date = now.getDate();

    let hour = now.getHours();
    if (hour <= 9) {
        hour = `0${hour}`;
    } else {
        hour = hour - 12;
    }

    let minutes = now.getMinutes();
    if (minutes <= 9) {
        minutes = `0${minutes}`;
    }

    let sentence = `${day}, ${month} ${date} at ${hour}:${minutes}`;

    if (now.getHours >= 12) {
        return <div>{sentence} P.M</div>
    } else {
        return <div>{sentence} A.M</div>
    }

}