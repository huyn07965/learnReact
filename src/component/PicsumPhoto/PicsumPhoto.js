import React, { useEffect, useState } from 'react';
import axios from 'axios';

const getItemPhoto = async (page) => {
    try {
        const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=8`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
// return axios.get(`https://picsum.photos/v2/list?page=${page}&limit=8`)
//         .then((response) => {
//             console.log(response);
//             return response.data;
//         })
//         .catch((error) => {
//             console.log(error);
//         });

const PicsumPhoto = () => {
    const [randomPhoto, setRandomPhoto] = useState([]);
    const [nextPage, setNextPage] = useState(1);

    const handleLoadMore = async () => {
        const images = await getItemPhoto(nextPage)
        const nextRandom = [...randomPhoto, ...images];
        setRandomPhoto(nextRandom);
        setNextPage(nextPage + 1);
    }

    useEffect(() => {
        handleLoadMore();
    });
    return (
        <div>
            <div className='grid grid-cols-4 gap-5 p-5'>
                {randomPhoto.length > 0 && randomPhoto.map((item, index) => (
                    <div className='p-3 bg-white shadow-md rounded-lg h-[200px]' key={item.id}>
                        <img src={item.download_url} alt={item.author} className='w-full h-full object-cover rounded-lg' />
                    </div>
                ))}
            </div>
            <div className='text-center'>
                <button onClick={handleLoadMore} className='inline-block px-8 py-4 bg-purple-600 text-white'>Load more</button>
            </div>
        </div>
    );
};
export default PicsumPhoto;