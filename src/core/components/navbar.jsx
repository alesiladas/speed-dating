import React, { useContext } from "react";

export const Navbar = () => {
    const address = localStorage.getItem("address");

    function signOut() { toggleUserStatus(false) }

    return (
        <div className="navbar">
            <span>
                <span style={{ color: "skyblue" }}>Signed in as: </span>
                {address}
            </span>
            <div className="right-nav">
                <button onClick={signOut}>Sign Out</button>
            </div>
        </div>
    )
}
