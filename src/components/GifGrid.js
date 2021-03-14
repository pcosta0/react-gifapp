import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

    const { data:images, loading } = useFetchGifs( category );

    return ( // retorna un componente 
        <>
            <h3 className = ' animate__animated animate__fadeIn'> { category } </h3>    
            { loading && <p className = 'animate__animated animate__flash'>Cargando...</p>}

            <div className="card-grid">
                { 
                    images.map( ( img ) => ( // procesa 'images' con GifGridItem 
                        <GifGridItem 
                            key = { img.id } // pasa el valor de key con el id de la img
                            { ...img } // pasa el resto de las 'props' con spread
                        />
                    ))
                }
            </div>
        </>
    )
}
