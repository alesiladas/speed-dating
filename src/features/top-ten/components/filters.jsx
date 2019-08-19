import React from "react";

/*
FILTERS THAT WOULD BE DROP DOWN AND SELECT ELEMENTS:
    - Religion
    - Pet Preference
    - Political View
    - Race/ethnicity
    - gender
    - Neighborhood

FILTERS THAT WOULD BE SIMPLE Y/N HIGHLIGHTED ELEMENTS TO SHOW SELECTION:
    - Alcohol Consumption
    - Recreational Drug Use
    - Smoking

FILTERS THAT WOULD BE A SLIDING SCALE TO SHOW RANGE:
    - Height

Note: Each jsx element type would be presentational components
passed in the selection of options per filter as props,
along with the passed on functionality to alter the state of the selected filters.

*/

const FiltersBar = (props) => {
    return (
        <div>
            {props.filters.map((filter) => {
                /* Would add in function to make filters more user friendly
                    i.e. w/o camelCase names */

                /* Would use a switch case to determine which jsx element (stated above)
                each filter gets rendered as */

                return <button onClick={() => {props.updateFilters(filter)}}>{filter}</button>
            })}
        </div>
    )
}

export default FiltersBar;
