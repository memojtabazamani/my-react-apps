import React from 'react';
import ReactDOM from 'react-dom';


class Message extends React.Component {
    constructor(props) {
        super(props);

        this.state = {hide: false}
    }

    render() {
        return (
            <div
                className={`ui ${this.props.type} message ${this.state.hide ? `hidden` : ``} ${this.props.icon ? "icon message" : ""}`}>
                { this.props.icon ?  <i className={`${this.props.icon} icon`}></i> : "" }
                {this.props.closeIcon &&
                <i className="close icon" onClick={e => this.setState({hide: true})}>&nbsp;</i>}
                <div className="content">
                    <div className="header">
                        {this.props.title}
                    </div>
                    <p>
                        {this.props.children}
                    </p>
                </div>
            </div>
        )
    }
}

/*
* Types of message
* success
* info
* warning
* positive
* */
Message.defaultProps = {
    title: "Message",
    type: "",
    closeIcon: false,
    icon: ""
}

export default Message;