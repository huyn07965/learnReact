import React, { useState } from 'react';
import './styles.css'

const Toogle = () => {
    const [on, setOn] = useState(false);
    console.log(on, setOn);

    const handleClick = () => {
        setOn(!on);
        // setOn((on) => !on);
    }

    return (
        <div>
            {/* <div className={`toogle ${on ? "active" : ""}`} onClick={() => setOn(!on)}> : cách 1 */}
            <div className={`toogle ${on ? "active" : ""}`} onClick={handleClick}> {/* Cách 2*/}

                <div className={`spiner ${on ? "active" : ""}`} ></div>
            </div>
            <div className='text'>
                <div className='nn' onClick={() => setOn(true)}>On</div>
                <div className='off' onClick={() => setOn(false)}>Off</div>
            </div>
        </div>
    );
};

export default Toogle;