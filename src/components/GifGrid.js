/*
* This component will render a grid of gifs.
* Gifs data obtained using hooks
*/
import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { data, loading } = useFetchGifs( category );

    return (
        <>
            <h3 className="card-category animate__animated animate__fadeInLeft">{ category }</h3>

            { loading && <p>Loading...</p> }

            <div className="card-grid">
                    {
                        data.map( img => (
                            <GifGridItem
                                key={ img.id }
                                { ...img } />
                        ))
                    }
            </div>
        </>
    )
}
