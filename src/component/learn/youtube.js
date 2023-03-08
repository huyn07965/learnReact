import React from 'react';
import './app.css';

const Anh = (props) => {
    return (
        <div className="Body">
            <div className="bodyImg">
                <img src={props.img} alt='' className='img' />
                <div className="content">
                    <img src={props.avt} alt='' className='avt' />
                    <div className="textcontent">
                        <h3 className='text'>{props.title}</h3>
                        <h3 className='text2'>{props.content}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Anh;