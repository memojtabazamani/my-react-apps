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

    const retreiveData = () => {
        myAxios.get('/users')
            .then(function ({data}) {
                setUsers(data);
                setloadUsers(false);
            });
    }
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
                                    {user[header]}
                                </td>
                            );
                        })
                    }

                </tr>
            )
        });
    }

    useEffect(async () => {
        retreiveData();
    }, []);

    function submitForm(v) {

    }

    if (actionMethod === "edit") {
        renderingUser = <MyForm>
            <MyInput label="Username" name="username" placeholder="Enter Username" validations="required"
                     valueInput={activeUser.username} validationForm={submitForm}/>
            <MyInput label="Email" name="email" placeholder="Enter Email" validations="required"
                     valueInput={activeUser.email} validationForm={submitForm}/>
        </MyForm>;
    } else if (actionMethod === "detail") {
        renderingUser = (
            <>
                <h2 className="ui">
                    { activeUser.username }
                </h2>
                <div className="ui list">
                    <div className="item">
                        <i className="address card icon"></i>
                        <div className="content">
                            {activeUser.id}
                        </div>
                    </div>
                    <div className="item">
                        <i className="user icon"></i>
                        <div className="content">
                            {activeUser.name}
                        </div>
                    </div>
                    <div className="item">
                        <i className="phone icon"></i>
                        <div className="content">
                            {activeUser.phone}
                        </div>
                    </div>
                    <div className="item">
                        <i className="firefox icon"></i>
                        <div className="content">
                            {activeUser.website}
                        </div>
                    </div>
                    <div class="item">
                        <i class="marker icon"></i>
                        <div class="content">
                            {activeUser.address.street} - {activeUser.address.suite} - {activeUser.address.city}
                        </div>
                    </div>
                    <div className="item">
                        <i className="envelope icon"></i>
                        <div className="content">
                            {activeUser.email}
                        </div>
                    </div>
                </div>
            </>
        )
    }
    if (users.length > 0) {
        return (
            <div className="ui container" style={style}>
                {renderingUser}
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