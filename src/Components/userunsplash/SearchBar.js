import React, {Component} from 'react';
import MyForm from '../../form-validations/MyForm'
import MyInput from '../../form-validations/MyInput'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {username: [], error: false};
    }

    async componentDidMount() {

    }
    submitForm(state, value) {
        this.props.sendUserName(value);
    }
    render() {
        return (
            <>
                <MyForm>
                    <MyInput label="Search Your user" name="username" placeholder="Search" validations="required" validationForm={this.submitForm.bind(this)}/>
                </MyForm>
            </>
        )
    }
}

export default SearchBar;