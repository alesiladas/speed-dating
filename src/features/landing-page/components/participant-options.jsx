import React from "react";

const ParticipantOptions = (props) => {
    const { setType } = props;

    return (
        <div>
            <button onClick={() => { setType("new") }}>New Participant</button>
            OR
            <button onClick={() => { setType("returning") }}>Returning Participant</button>
        </div>
    )
}

export default ParticipantOptions;
