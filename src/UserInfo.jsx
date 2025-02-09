import React from "react";

class UserInfo extends React.Component {
    constructor(){
        super();
        this.state = { 
            username: "John Doe",
            profession: "Computer Science",
            random: Math.ceil(1 + Math.random() * 9)
        };
    }

    render() {
        return(
            <div>
                <h2>User Information</h2>
                <p>Username: {this.state.username}</p>
                <p>Profession: {this.state.profession}</p>
                <p>Your lucky number is {this.state.random}</p>
            </div>
        )
    }
}

export default UserInfo