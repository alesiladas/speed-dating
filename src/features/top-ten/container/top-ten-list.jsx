import React from "react";
import Profile from "../components/profile";
import FiltersBar from "../components/filters";

class TopTenList extends React.Component {
    constructor(props) {
        super()
        this.state = {
            profileList: [],
            filters: {
                name: false,
                age: false,
                gender: false,
                city: false,
                height: false,
                petPreference: false,
                religion: false,
                raceOrEthnicity: false,
                smoker: false,
                recreationalDrugUse: false,
                politicalView: false
            },
            preferences: []
        }

        this.updateFilters = this.updateFilters.bind(this)
        this.submitPreferences = this.submitPreferences.bind(this)
        this.updatePreferences = this.updatePreferences.bind(this)
    }

    componentDidMount() {
        /* request to get profile list associated with event
        set state of profileList */
    }

    updateFilters(filter) {
        let filterToChange = {}
        filterToChange[filter] = (this.state.filters[filter]) ? false : true;
        this.setState({filters: filters[filter]})
        //update the state of filters
    }

    submitPreferences() {
        //request to submit list of preferences of participant
    }

    updatePreference(id) {
        let preferences = [...this.state.preferences];
        let updatedPreferences;
        if (this.state.preferences.includes(id)) {
            let i = this.state.preferences.indexOf(id)
            updatedPreferences = preferences.splice(i, 1);
            this.setState({preferences: updatedPreferences});
        } else {
            preferences.push(id)
            this.setState({ preferences })
        }
    }

    render() {
        const sortedProfileList = profileList.sort(() => {
            //sort based on filters with profiles that
            //have the highest frequency of filter matches
        })

        return (
            <div>
                <FiltersBar updateFilters={this.updateFilters} filters={Object.keys(props.filters)}/>
                <div>
                    {sortedProfileList.map(profile => {
                        return <Profile profileDetails={profile} updatePreference={this.updatePreference}/>
                    })}
                </div>
                <button onClick={this.submitPreferences}>Submit Preferences</button>
            </div>
        )
    }
}

export default TopTenList;
