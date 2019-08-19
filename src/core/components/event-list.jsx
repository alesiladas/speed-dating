import React from "react";

const Event = (props) => {
    const {
        name,
        startDateTime,
        endDateTime,
        registrationDeadline,
        cap,
        durationOfRound
    } = props.eventDetails;

    return (
        <div>
            <span>Name: {name}</span>
            <span>Start: {startDateTime}</span>
            <span>End: {endDateTime}</span>
            <span>Registration Deadline: {registrationDeadline}</span>
            <span></span>
            {/* if cap is reached (check how many profiles are related to event)
            then show create schedule button */}
        </div>
    )
}

const EventList = (props) => {
    const {eventList} = props;

    return (
        <div>
            {eventList.map(event => {
                return <Event eventDetails={event}/>
            })}
        </div>
    )
}

export default EventList;
