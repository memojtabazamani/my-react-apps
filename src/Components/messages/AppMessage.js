import React from 'react';
import ReactDOM from 'react-dom';

import Message from './Message';

class AppMessage extends React.Component {
    render() {
        return (
            <>
                <Message title="New Message!" type="warning" closeIcon={true} icon={"address book"}>
                    You Have Message from "Jhon Doe"
                </Message>
                <Message title="New Download!" type="info" closeIcon={true} icon={"download"}>
                    [New link... Download This]
                </Message>
                <Message title="Notification" type="success" closeIcon={true} icon={"bell"}>
                    You Have 1060 Unread Message
                </Message>
                <Message title="Checked Task" type="positive" closeIcon={true} icon={"calendar check"}>
                    Task [Go Gym] Completed
                </Message>
            </>
        )
    }
}

export default AppMessage;