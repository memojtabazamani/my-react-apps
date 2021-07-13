import React from 'react';
import ReactDOM from 'react-dom';

class ParentAccordion extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="ui accordion">
                { this.props.children }
            </div>
        )
    }
}

export default ParentAccordion;