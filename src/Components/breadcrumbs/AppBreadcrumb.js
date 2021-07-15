import React from 'react';
import ReactDOM from 'react-dom';

import ParentCrumb from './ParentCrumb';
import ItemCrumb from './ItemCrumb';

class AppBreadcrumb extends React.Component {
    render() {
        return (
            <>
                <ParentCrumb size="huge" useIconDivier={true} justText={true}>
                    <item title="Home"  />
                    <item title="News"  />
                    <item title="News - 695"  />
                    <item title="Detail"/>
                </ParentCrumb>
            </>
        )
    }
}

export default AppBreadcrumb;