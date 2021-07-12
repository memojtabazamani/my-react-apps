import React from 'react';
import ReactDOM from 'react-dom';

class MyInput extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        valueOfThis: "",
        messageError: "",
    }

    validationMe(e) {
        if (this.state.valueOfThis == "" || this.state.valueOfThis.toString().length == 0) {
            let nameOfThis = this.props.name[0].toUpperCase() + this.props.name.slice(1);
            this.setState({
                messageError: nameOfThis + " Input Must Be Entred"
            })
        } else {
            this.setState({
                messageError: ""
            })
        }
    }

    render() {
        let styles = {
            "display": (this.state.messageError ? "block" : "none")
        }
        return (
            <>
                <div className="field">
                    <label>
                        { this.props.label }
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

export default MyInput;