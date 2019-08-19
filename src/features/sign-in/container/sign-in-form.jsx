import React, { useState } from "react";
import { authenticateAdmin } from "../../../api-request"

export const SignInForm = (props) => {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    function handleEmailChange(event) {
        event.preventDefault();
        const value = event.target.value;
        setEmail(value);
    }

    function handlePasswordChange(event) {
        event.preventDefault();
        const value = event.target.value;
        setPassword(value);
    }

    function submitCredentials() {
        if (!email || !passord) alert("Email or password field is empty");
        if (props.isAdmin) {
            authenticateAdmin(email, password)
                .then(response => {
                    /* if successful response:
                        - change admin flag to true
                        - set status as signed in
                    */
                })
        } else authenticateUser(email, password)
            .then(response => {
                /* if successful response:
                        - set status as signed in
                        - update user data in some global state (redux or a hook reducer)
                            for display in profile and navbar name
                    */
            })

        //could use response to get name of user to be displayed as alt or for admin just "admin".
        localStorage.setItem("email", email);
    }

    return (
        <div>
            <span>Welcome! Please sign-in</span>
            <form>
                <input type="text" placeholder="email" onChange={handleEmailChange} />
                <input type="text" placeholder="Password" onChange={handlePasswordChange} />
            </form>
            <button onClick={submitCredentials}>Sign In</button>
        </div>
    )
}
