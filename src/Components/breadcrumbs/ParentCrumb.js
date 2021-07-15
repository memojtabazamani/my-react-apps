import React from 'react';
import ReactDOM from 'react-dom';

class ParentCrumb extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="ui breadcrumb">
                { this.props.children }
            </div>
        )
    }
}

export default ParentCrumb;