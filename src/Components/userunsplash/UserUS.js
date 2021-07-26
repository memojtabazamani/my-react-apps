import React, {Component} from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import Message from '../messages/Message';
import UserCard from './UserCard';
import Loader from '../loader/Loader';

class UserUS extends Component {
    state = {user: null, error: ""};
    showUserName(value) {
        this.setState({
            loading: true
        });
        axios.get(`https://api.unsplash.com/users/${value}`, {
            headers: {
                Authorization: "Client-ID -PiTrb0DiYd4Kcc4yevICXt2Ci3OzymTlVnj4HcqWrY"
            }
        }).then(function (response) {
            // handle success
            this.setState({
                user: response.data,
                error: "",
                loading: false
            });
        }.bind(this)).catch(function (error) {
            this.setState({
                user: null,
                error: "User not found!",
                loading: false
            });
        }.bind(this));
    }

    render() {
        let renderExe;
        if(this.state.error) {
            renderExe = <Message title="Info" type="warning" closeIcon={true} icon={"address book"}> User Not Found </Message> ;
        } else if (this.state.loading) {
            renderExe = <Loader />;
        } else {
            renderExe = this.state.user != null && <UserCard user={this.state.user}/>;
        }

        return (
            <div className="ui container ">
                <SearchBar sendUserName={this.showUserName.bind(this)}/>
                { renderExe }
            </div>
        )
    }
}

export default UserUS;