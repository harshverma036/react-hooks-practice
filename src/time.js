import React, { useState } from "react";

function Time() {
    const currentTime = new Date().toLocaleTimeString();
    const [start, time] = useState(currentTime);
    const getCurrentTime = () => {
        const newTime = new Date().toLocaleTimeString();
        time(newTime);
    }
    setTimeout(getCurrentTime, 1000);
    return (
        <div className="row justify-content-center container-content align-items-center">
            <div className="col col-lg-4 col-md-7 col-11 d-flex flex-column align-items-center text-center">
                <h1 className="text-center text-danger count-text">{start}</h1>
                <button className="btn btn-info mt-1" onClick={getCurrentTime}>Get Current Time</button>
            </div>
        </div>
    );
}

export default Time;