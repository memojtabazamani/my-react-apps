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
            </>
        )
    }
}

export default AppMessage;