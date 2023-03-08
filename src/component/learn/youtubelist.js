import React from 'react';
import { mockapi } from './mockapi'
import Anh from './youtube'
import './app.css';

const Youtubelist = () => {
    return (
        <div className="All">
            {mockapi.map((item) => (
                <Anh
                    key={item.id}
                    img={item.img}
                    avt={item.avt}
                    title={item.title}
                    content={item.content}>
                </Anh>

            ))}
        </div>
    );
};

export default Youtubelist;