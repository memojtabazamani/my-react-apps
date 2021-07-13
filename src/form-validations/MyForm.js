import React from 'react';
import ReactDOM from 'react-dom';
import MyInput from './MyInput';

class MyForm extends React.Component {
    myState = false;
    constructor(props) {
        super(props);
        this.state = { errorsInput: ["",""], numberOf: 0 };
    }
    submitForm(e) {
        e.preventDefault();
        // this.setState({
        //     submitedForm: true,
        // });
        // console.log(this.state.submitedForm);
        // console.log(this.props.children);
    }
    setValidation(state) {
        this.myState = state;
        this.setState({
            submitedForm: false,
        });
    }

    validationInputs(e) {
        e.preventDefault();
        let faild = true;
        // let splitValidations = vlidations != "" ? vlidations.split(",") : "";
        const childs = this.props.children;
        console.log(childs[0]);
        // if(validations == "") return;
        // let newErrors = this.state.errorsInput;
        // validations.map((valid) => {
        //     if (valid == "required") {
        //         if (value == "" || value.length == 0) {
        //             let nameOfThis = name[0].toUpperCase() + name.slice(1);
        //
        //             newErrors.push(nameOfThis + " Must Be Entred");
        //             faild = false;
        //         }
        //     } else if (valid == "integer") {
        //         let convertToNumber = Number(value);
        //         if (isNaN(convertToNumber)) {
        //             let nameOfThis = name[0].toUpperCase() + name.slice(1);
        //             // this.setState({
        //             //     messageError: nameOfThis + " Must Be Integer"
        //             // });
        //             faild = false;
        //         }
        //     }
        // });
        // // if (faild) {
        //     this.setState({
        //         errorsInput: newErrors
        //     })
        // // }
        // //
        // // this.props.validationForm(faild);

    }

    render() {
        return(

            <form className="ui form ">
                {
                    this.props.children
                }
                <button className="ui button" type="submit" onClick={this.validationInputs.bind(this)}>Submit</button>
            </form>
        )
    }
}


export default MyForm;