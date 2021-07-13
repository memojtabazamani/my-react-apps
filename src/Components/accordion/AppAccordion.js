import React from 'react';
import ReactDOM from 'react-dom';

import ParentAccordion from './ParentAccordion';
import ChildAccordion from './ChildAccordion';

class AppAccordion extends React.Component {
    constructor(props) {
        super(props)

        this.state = { currentState: 1 };
    }
    changeCurrentState(index) {
        console.log(index);
        this.setState({
            currentState: index
        })
    }
    render() {
        return (
            <div className="ui container">
                <ParentAccordion>
                    <ChildAccordion indexAcc={1} titleAcc="Tab 1" curentIndex={this.state.currentState} changeState={this.changeCurrentState.bind(this)}/>
                    <ChildAccordion indexAcc={2} titleAcc="Tab 2" curentIndex={this.state.currentState} changeState={this.changeCurrentState.bind(this)}/>
                    <ChildAccordion indexAcc={3} titleAcc="Tab 3" curentIndex={this.state.currentState} changeState={this.changeCurrentState.bind(this)}/>
                </ParentAccordion>
            </div>
        )
    }
}

export default AppAccordion;