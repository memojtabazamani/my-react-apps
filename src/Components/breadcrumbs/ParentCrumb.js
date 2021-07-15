import React from 'react';
import ReactDOM from 'react-dom';

class ParentCrumb extends React.Component {
    /*
    * Size of breadcrumbs :
    * mini
    * tiny
    * small
    * large
    * hig
    * huge
    * massive
    * */
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={`ui ${this.props.size} breadcrumb`}>
                { this.props.children }
            </div>
        )
    }
}
ParentCrumb.defaultProps ={
    size: "small"
}
export default ParentCrumb;