import React from 'react';
import ReactDOM from 'react-dom';


class LabelButton extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                <div className="ui labeled button" tabIndex="0">
                    <div className={`ui ${this.props.iconClassName} button`}>
                        <i className={` ${this.props.icon} icon`}/> {this.props.title}
                    </div>
                    <a className={`ui left pointing label ${this.props.contentClassName} `}>
                        {this.props.content}
                    </a>
                </div>
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

LabelButton.defaultProps = {
    title: "Subscriber",
    content: "Last Updated 1800"
}

export default LabelButton;