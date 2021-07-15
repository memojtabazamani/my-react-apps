import React from 'react';
import ReactDOM from 'react-dom';


// import BasicButton from './BasicButton';
import LabelButton from './LabelButton/LabelButton';
// import IconButton from './LabelButton/IconButton';
// import ContentButton from './LabelButton/ContentButton';


class AppButton extends React.Component {
    render() {
       let cb = "FollowMe";
        return (
            <>
                <LabelButton
                    icon={"question circle outline"}
                    iconClassName="basic positive "
                    contentClassName={"green"}
                    content={cb}
                    title={1025}
                />
            </>
        )
    }
}

export default AppButton