import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import myAxios from './apiJson';
import Loader from '../../loader/Loader';
import MyForm from '../../../form-validations/MyForm';
import MyInput from '../../../form-validations/MyInput';

export default () => {
    const style = {
        "marginTop": "5%",
    }
    const headerTable = ["id", "name", "email", "website", "actions"];

    const [users, setUsers] = useState([]);
    const [loadUsers, setloadUsers] = useState(true);
    const [activeUser, setactiveUser] = useState(null);


    const showForm = (user) => {
        setactiveUser(null);
        setactiveUser(user);
    }

    function renderHeaders() {
        return headerTable.map((header, index) => {
            return (<th key={index}>{header}</th>);
        });
    }


    function renderBody() {

        return users.map((user) => {
            return (
                <tr key={user.id}>
                    {
                        headerTable.map(header => {
                            return (
                                <td key={user.id + header}>
                                    {header != "actions" ? user[header] :
                                        <button
                                            className="ui button"
                                            onClick={(e) => setactiveUser(user)}>
                                            Edit
                                        </button>
                                    }
                                </td>
                            );
                        })
                    }

                </tr>
            )
        });
    }

    const retreiveData = () => {
        myAxios.get('/users')
            .then(function ({data}) {
                setUsers(data);
                setloadUsers(false);
            });
    }

    useEffect(async () => {
        retreiveData();
    }, []);
    function submitForm(v) {

    }
    if (users.length > 0) {
        return (
            <div className="ui container" style={style}>
                {
                    activeUser &&
                <MyForm>
                    { activeUser.username }
                    <MyInput label="Username" name="username" placeholder="Enter Username" validations="required" valueInput={activeUser.username} validationForm={submitForm}/>
                </MyForm>
                }
                <table className="ui celled table">
                    <thead>
                    <tr>
                        {renderHeaders()}
                    </tr>
                    </thead>
                    <tbody>
                    {renderBody()}
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <Loader/>
    )
}