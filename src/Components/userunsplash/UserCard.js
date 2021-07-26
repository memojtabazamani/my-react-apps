import React, {Component} from 'react';

class UserCard extends Component {
    user = [];

    constructor(props) {
        super(props);
        this.user = props.user;

    }

    render() {
        let date = new Date(this.user.updated_at);
        console.log(date);
        const icons = {
            "instagram_username": "instagram ",
            "portfolio_url": "address book",
            "twitter_username": "twitter",
            "paypal_email": "paypal"
        }
        let soc = this.user.social;
        let exeSoc = [];
        for (var x in soc) {
            if (soc[x]) {
                var elm =
                    <div className="item">
                        <i className={`${icons[x]} icon`}></i>
                        <div className="content">{soc[x]}</div>
                    </div>;
                exeSoc.push(elm);
            }
        }
        return (
            <>
                <div className="ui link cards sex column container">
                    <div className="card column">
                        <div className="image">
                            <img src={this.user.profile_image.large}/>
                        </div>
                        <div className="content">
                            <div className="header">{this.user.username}</div>
                            <div className="description">
                                {this.user.bio ?? "Hello There"}
                            </div>
                        </div>
                        <div className="content">
                            <div className="ui list">

                                <div className="item">
                                    <i className="user icon"></i>
                                    <div className="content">
                                        {this.user.following_count}
                                    </div>
                                </div>

                                <div className="item">
                                    <i className="user icon"></i>
                                    <div className="content">
                                        {this.user.followers_count}
                                    </div>
                                </div>

                                {exeSoc}
                            </div>

                        </div>
                        <div className="extra content">
                            <small>
                                Joined in { date.getFullYear() }-{ date.getDate() }-{
                                date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()}
                            </small>
                        </div>
                    </div>
                    <table className="ui blue table card ten wide column" style={{
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