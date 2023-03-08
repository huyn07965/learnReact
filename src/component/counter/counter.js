import React, { useEffect, useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);
    const [info, setInfo] = useState({
        firstName: "Tran",
        lastName: "Tuan"
    });

    useEffect(() => {
        console.log("count");
    }, [info.firstName])

    return (
        <div className='p-5 flex grap-x-4 text-center'>
            <input
                type="text"
                name='firstName'
                value={info.firstName}
                onChange={(e) =>
                    setInfo({
                        ...info,
                        firstName: e.target.value,
                    })
                }
            />
            <span className='text-2xl font-bold'>{count}</span>
            <button className='inline-block p-3 bg-green-400 text-white' onClick={() => setCount(count + 1)}>Imcrement</button>
        </div>
    );
};

export default Counter;