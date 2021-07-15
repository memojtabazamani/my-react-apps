import React from 'react';
import ReactDOM from 'react-dom';

import ItemCrumb from './ItemCrumb';
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
        // Here Render A new child and options
        let items = this.props.children.map(function(item, index) {
            let com;

            // set active breadcrumb
            if(index === this.props.children.length - 1 ) {
                com = <>
                    <ItemCrumb title={item.props.title} active={true} key={index}  />
                </>
            } else { // Normal Item
                com = <>
                    <ItemCrumb title={item.props.title} useIconDivier={this.props.useIconDivier} key={index} justText={this.props.justText}/>
                </>
            }
            return com;
        }.bind(this));
        return (
            <div className={`ui ${this.props.size} breadcrumb`}>
                {items}
            </div>
        )
    }
}
ParentCrumb.defaultProps ={
    size: "small",
    useIconDivier: false,
    justText:false
}
export default ParentCrumb;