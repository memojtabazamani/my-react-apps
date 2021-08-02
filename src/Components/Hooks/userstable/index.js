import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import myAxios from './apiJson';
import Loader from '../../loader/Loader';

export default () => {
    const style = {
        "marginTop": "5%",
    }
    const headerTable = ["id", "name", "email", "website"];

    const [users, setUsers] = useState([]);
    const [loadUsers, setloadUsers] = useState(true);

    function renderHeaders() {
        return headerTable.map((header, index) => {
            return (<th key={index}>{header}</th>);
        });
    }

    function renderBody() {

        return users.map((user, index) => {
            return (
                <tr key={user.id}>
                    {
                        headerTable.map(header => {
                            return (<td>{user[header]}</td>);
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

    if(users.length > 0) {
        return (
            <div className="ui container" style={style}>
                <table className="ui celled table">
                    <thead>
                    <tr>
                        {renderHeaders()}
                    </tr>
                    </thead>
                    <tbody>
                    { renderBody() }
                    </tbody>
                </table>
            </div>
        )
    }
    return (
        <Loader />
    )
}