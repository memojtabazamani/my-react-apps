import React from 'react';
import ReactDOM from 'react-dom';

class MyInput extends React.Component {

    constructor(props) {
        super(props);
        this.splitValidations = this.splitValidations != "" ? this.props.validations.split(",") : "";


    }

    state = {
        valueOfThis: "",
        messageError: "",
    };

    componentDidMount() {
        console.log(this.props.reValidationInput);
    }

    validationMe(e) {
        let faild = true;
        if(this.splitValidations == "") return;
        this.splitValidations.map((valid) => {
            if (valid == "required") {
                if (this.state.valueOfThis == "" || this.state.valueOfThis.toString().length == 0) {
                    let nameOfThis = this.props.name[0].toUpperCase() + this.props.name.slice(1);
                    this.setState({
                        messageError: nameOfThis + " Must Be Entred"
                    })
                    faild = false;
                }
            } else if (valid == "integer") {
                let convertToNumber = Number(this.state.valueOfThis);
                if (isNaN(convertToNumber)) {
                    let nameOfThis = this.props.name[0].toUpperCase() + this.props.name.slice(1);
                    this.setState({
                        messageError: nameOfThis + " Must Be Integer"
                    });
                    faild = false;
                }
            }
        });
        if (faild) {
            this.setState({
                messageError: ""
            })
        }

        this.props.validationForm(faild);
    }

    render() {
        let styles = {
            "display": (this.state.messageError ? "block" : "none")
        };
        return (
            <>
                <div className="field">
                    <label>
                        {this.props.label}
                    </label>
                    <input
                        type="text"
                        name={this.props.name}
                        placeholder={this.props.placeholder}

                        value={this.state.valueOfThis}
                        onChange={e => this.setState({valueOfThis: e.target.value})}
                        onBlur={this.validationMe.bind(this)}
                    />
                </div>
                <div className="ui error message" style={styles}>
                    <p>
                        {this.state.messageError}
                    </p>
                </div>
            </>
        )
    }
}

MyInput.defaultProps = {
    validations: ""
};

export default MyInput;