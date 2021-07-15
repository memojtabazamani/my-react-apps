import React from 'react';
import ReactDOM from 'react-dom';

import ParentCrumb from './ParentCrumb';
import ItemCrumb from './ItemCrumb';

class AppBreadcrumb extends React.Component {
    render() {
        return (
            <>
                <ParentCrumb>
                    <ItemCrumb title="Home"/>
                    <ItemCrumb title="News"/>
                    <ItemCrumb title="News - 695"/>
                    <ItemCrumb title="Detail" active={true}/>
                </ParentCrumb>
            </>
        )
    }
}

export default AppBreadcrumb;