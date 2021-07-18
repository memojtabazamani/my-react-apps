import React,{ Component } from 'react';

class UserCard extends Component {
    user = [];
    constructor(props) {
        super(props);
        this.user = props.user;
    }
    render() {
        let date = new Date(this.user.update_a);
        console.log(date);
        return (
            <>
                <div className="ui link cards five column container">
                    <div className="card column">
                        <div className="image">
                            <img src={this.user.profile_image.large} />
                        </div>
                        <div className="content">
                            <div className="header">{this.user.username}</div>
                            <div className="description">
                                {this.user.bio}
                            </div>
                        </div>
                        <div className="extra content">
      <span className="right floated">
        Joined in {date.getFullYear()}
      </span>
                            <span>
        <i className="user icon"></i>
                                {this.user.followers_count} Followers
      </span>
                        </div>
                    </div>
                    <table className="ui blue table card twelve wide column" style={{
                        flex: "auto"
                    }}>
                        <tbody>
                        <tr>
                            <td>Apples</td>
                            <td>asdq2</td>
                        </tr>
                        <tr>
                            <td>Orange</td>
                            <td>310</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </>
        )
    }
}

export default UserCard;