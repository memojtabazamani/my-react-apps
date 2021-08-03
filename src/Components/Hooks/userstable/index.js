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
    const headerTable = ["id", "username", "email", "website", "edit", "detail"];

    const [users, setUsers] = useState([]);
    const [loadUsers, setloadUsers] = useState(true);
    const [activeUser, setactiveUser] = useState(null);
    const [actionMethod, setActionMethod] = useState(null);
    let renderingUser = null;


    const showForm = (user, type) => {
        setactiveUser(user);
        setActionMethod(type);
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
                                    {
                                        header === "edit" &&
                                        <button
                                            className="ui button"
                                            onClick={(e) => showForm(user, "edit")}>
                                            Edit
                                        </button>
                                    }
                                    {
                                        header === "detail" &&
                                        <button
                                            className="ui button green"
                                            onClick={(e) => showForm(user, "detail")}>
                                            Detail
                                        </button>
                                    }
                                    { user[header] }
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

    if(actionMethod === "edit") {
        renderingUser =  <MyForm>
            <MyInput label="Username" name="username" placeholder="Enter Username" validations="required" valueInput={activeUser.username} validationForm={submitForm}/>
            <MyInput label="Email" name="email" placeholder="Enter Email" validations="required" valueInput={activeUser.email} validationForm={submitForm}/>
        </MyForm>;
    } else {
        renderingUser = "Detail";
    }

    if (users.length > 0) {
        return (
            <div className="ui container" style={style}>
                { activeUser && renderingUser }
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