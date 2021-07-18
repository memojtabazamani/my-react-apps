import React from 'react';
import ReactDOM from 'react-dom';
import MyInput from './MyInput';

class MyForm extends React.Component {
    myState = false;
    constructor(props) {
        super(props);
        this.state = { errorsInput: ["",""], numberOf: 0 };
    }

    validationInputs(e) {
        e.preventDefault();
        const childs = this.props.children;
        this.props.submitedForm(childs);

    }

    render() {
        return(

            <form className="ui form ">
                {
                    this.props.children
                }
                {/*<button className="ui button" type="submit" onClick={this.validationInputs.bind(this)}>Submit</button>*/}
            </form>
        )
    }
}


export default MyForm;