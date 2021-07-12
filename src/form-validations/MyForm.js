import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
    childs;
    constructor(props) {
        super(props);

        console.log(this.children);
    }
    render() {
        return(
            <form className="ui form ">
                {
                    this.props.children
                }
            </form>
        )
    }
}


export default MyForm;