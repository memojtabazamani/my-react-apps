import React, {Component} from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import Message from '../messages/Message';
import UserCard from './UserCard';

class UserUS extends Component {
    constructor(props) {
        super(props);
        this.state = {user: null, error: ""};
        // this.apiUser = this.apiUser("").bind(this);
    }

    async apiUser(value) {

    }

    showUserName(value) {
        console.log(value);
        axios.get(`https://api.unsplash.com/users/${value}`, {
            headers: {
                Authorization: "Client-ID -PiTrb0DiYd4Kcc4yevICXt2Ci3OzymTlVnj4HcqWrY"
            }
        }).then(function (response) {
            // handle success
            this.setState({
                user: response.data,
                error: "",
            });
        }.bind(this)).catch(function (error) {
            this.setState({
                user: null,
                error: "User not found!"
            })
        }.bind(this));
    }

    render() {
        return (
            <div className="ui container ">
                <SearchBar sendUserName={this.showUserName.bind(this)}/>

                { this.state.error && <Message title="Info" type="warning" closeIcon={true} icon={"address book"}>
                    User Not Found
                </Message> }

                {
                    this.state.user != null && <UserCard user={this.state.user}/>
                }
            </div>
        )
    }
}

export default UserUS;