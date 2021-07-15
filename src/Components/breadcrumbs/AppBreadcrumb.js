import React from 'react';
import ReactDOM from 'react-dom';

import ParentCrumb from './ParentCrumb';
import ItemCrumb from './ItemCrumb';

class AppBreadcrumb extends React.Component {
    render() {
        return (
            <>
                <ParentCrumb size="huge">
                    <ItemCrumb title="Home" useIconDivier={true} />
                    <ItemCrumb title="News" useIconDivier={true} />
                    <ItemCrumb title="News - 695" useIconDivier={true} />
                    <ItemCrumb title="Detail" active={true}/>
                </ParentCrumb>
            </>
        )
    }
}

export default AppBreadcrumb;