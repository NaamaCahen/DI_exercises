import React from 'react';
import { useEffect, useState,useContext } from 'react';
import { createClient } from 'pexels';
import './Gallery.css';
import { HomeContext } from './Home';

function Gallery(props) {
    const [pictures, setPictures] = useState([]);
    const {category}=useContext(HomeContext);

    const client = createClient('563492ad6f9170000100000173b8b886b1a64fcdb246caec703478ba')
    const query = category;

    useEffect(() => {
        client.photos.search({
            query, per_page: 24
        }).then(object=>{
            console.log(object.photos);
            setPictures(object.photos)
        })
        .catch(e=>{console.log(e);})
    }, [category])

    if (pictures) {
        return (
            <>
                <div className='w-60 m-auto flex flex-wrap'>
                {
                    pictures.map((item)=>{
                        return(
                            <div className='dib img grow' key={item.id}>
                                <img  src={item.src.tiny} alt={item.alt}/>
                            </div>
                        )
                    })
                }</div>
            </>
        )
    }

}

export default Gallery