import React , { useState } from 'react';

export default () => {
    const thisStyle = {
        "marginTop": "10px",
    };

    const [power, setPower] = useState(1);

    function powerOff() {
        setPower(0);
    }
    function powerOn() {
        setPower(1);
    }

    return (
        <div className="ui container" style={thisStyle}>
            <div className="ui buttons">
                <button className={`ui button ${power == 1 ? `positive  active` : ``} `} onClick={powerOn}>On</button>
                <button className={`ui button ${power == 0 ? `positive  active` : ``} `} onClick={powerOff}>Off</button>
            </div>
        </div>
    )
}
