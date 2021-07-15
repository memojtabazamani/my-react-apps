import React from 'react';
import ReactDOM from 'react-dom';

class ItemCrumb extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let renderItem;
        // Check for are active this item or not?
        if(!this.props.active) { // is de-active render de-active item
            renderItem =
                <>
                    { this.props.justText ? <div className="section">{ this.props.title }</div> : <a className="section">{ this.props.title }</a> }

                    {
                        this.props.useIconDivier ? <i className="right chevron icon divider"></i>  :  <span className = "divider" > / </span> }

                </>
        } else { // is active render active item
            renderItem = <> <div className="active section">Personal Information</div> </>
        }
        return(
            renderItem
        )
    }
}

// set default props
ItemCrumb.defaultProps = {
    title: "item",
    active: false
}

export default ItemCrumb;