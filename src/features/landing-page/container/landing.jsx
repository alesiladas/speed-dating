import React from "react";
import ParticipantOptions from "../components/participant-options";

class Landing extends React.Component {
    constructor(props) {
        super();
        this.state = {
            isSignedIn: false,
            participantType: "",
        };

        this.toggleUserStatus = this.toggleUserStatus.bind(this);
        this.setParticipantType = this.setParticipantType.bind(this);
        this.updateUserData = this.updateUserData.bind(this);
    }

    toggleUserStatus(isSignedIn) {
        (isSignedIn) ? this.setState({ isSignedIn: true }) : this.setState({ isSignedIn: false })
    }

    setParticipantType(type) {
        this.setState({ participantType: type })
    }

    render() {
        const { participantType } = this.state;
        return (
            <div>
                {(participantType === "new") ? <ParticipantRegistry /> :
                    ((participantType === "returning")) ? <SignIn /> :
                        <ParticipantOptions setType={this.setParticipantType}/>
                }

            </div>
        )
    }
}

export default Landing;
