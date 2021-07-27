import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
  
    const { data, loading } = useFetchGifs( category );
    console.log(loading);
  
    return (
        <>
        <h3 className='animate__animated animate__fadeIn'>{ category }</h3>
        { loading && <p className='animate__animated animate__flash'>Loading...</p>}

        
       <div className = 'card-grid'>
            <ol>
                {
                    data.map( img => (
                         <GifGridItem id={img.id} title={img.title} url={img.url} key= {img.id}/>
                    ))
                }
            </ol>
        </div>
        </>
    )
}
