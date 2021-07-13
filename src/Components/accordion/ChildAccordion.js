import React from 'react';
import ReactDOM from 'react-dom';

class ChildAccordion extends React.Component {

    constructor(props) {
        super(props);
    }

    changeStateMe() {
        this.props.changeState(this.props.indexAcc);
    }
    render() {
        let areCurrentMe = (this.props.indexAcc == this.props.curentIndex)
        return (
            <>
                <div className={`title ${areCurrentMe ? 'active': '' }` } onClick={this.changeStateMe.bind(this)}>
                    <i className="dropdown icon"></i>
                    { this.props.titleAcc }
                </div>
                <div className={`content ${areCurrentMe ? 'active': 'hidden' }` } >
                    <p className="transition ">
                        Acc : { this.props.indexAcc }
                    </p>
                </div>
            </>
        )
    }
}

export default ChildAccordion;