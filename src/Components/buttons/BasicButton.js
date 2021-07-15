import React from 'react';
import ReactDOM from 'react-dom';

class BasicButton extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                <button className={`ui ${this.props.type} basic button`}>
                    {this.props.children }
                </button>
            </>
        )
    }
}

/*
* Type of buttons
* primary
* secondary
* positive
* negative
* */

export default BasicButton;