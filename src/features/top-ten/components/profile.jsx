import React from "react";

const Profile = (props) => {
    const {
        id,
        name,
        age,
        gender,
        city,
        jobTitle,
        height,
        petPreference,
        religion,
        raceOrEthnicity,
        smoker,
        recreationalDrugUse,
        politicalView
    } = props.profileDetails;

    return (
        <div>
            <span>Name: {name}</span>
            <span>Age: {age}</span>
            <span>Gender: {gender}</span>
            <span>City: {city}</span>
            <span>Job Title: {jobTitle}</span>
            <span>Height: {height}</span>
            <span>Pet Preference: {petPreference}</span>
            <span>Religion: {religion}</span>
            <span>Race/Ethnicity: {raceOrEthnicity}</span>
            <span>Smokes?: {(smoker) ? "yes": "no"}</span>
            <span>Recreational Drug Use: {recreationalDrugUse}</span>
            <span>Political View: {politicalView}</span>
            <button onClick={() => {props.updatePreference(id)}}>Add</button>
        </div>
    )
}

export default Profile;
