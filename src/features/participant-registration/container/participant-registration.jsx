import React from "react";

class ParticipantRegistrationForm extends React.Component {
    constructor(props) {
        super()
        this.state = {
            name: "",
            email: "",
            age: "",
            gender: "",
            city: "",
            jobTitle: "",
            company: "",
            height: "",
            petPreference: "",
            religion: "",
            raceOrEthnicity: "",
            smoker: false,
            recreationalDrugUse: false,
            politicalView: ""
        }
    }

    handleChange(event) {
        //update state of specific value based on input
    }

    render() {
        return (
            <div>
                <form>
                    {/* This isn't ideal because most of these will not be input fields,
                        some might be drop downs (height, gender, age, race/ethnicity,
                        religion, smoking, drug use, politics, pets) */}
                    <input type="text" placeholder="Name" onChange={handleChange} />
                    <input type="text" placeholder="Email" onChange={handleChange} />
                    <input type="text" placeholder="Age" onChange={handleChange} />
                    <input type="text" placeholder="Gender" onChange={handleChange} />
                    <input type="text" placeholder="City" onChange={handleChange} />
                    <input type="text" placeholder="Job Title" onChange={handleChange} />
                    <input type="text" placeholder="Company" onChange={handleChange} />
                    <input type="text" placeholder="Height" onChange={handleChange} />
                    <input type="text" placeholder="Pets" onChange={handleChange} />
                    <input type="text" placeholder="Religion" onChange={handleChange} />
                    <input type="text" placeholder="RaceOrEthnicity" onChange={handleChange} />
                    <input type="text" placeholder="Smoking" onChange={handleChange} />
                    <input type="text" placeholder="Recreational Drugs" onChange={handleChange} />
                    <input type="text" placeholder="Political View" onChange={handleChange} />
                </form>
                <button onClick={submitCredentials}>Sign In</button>
            </div>
        )
    }
}
