import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/GetGifs'

// Custom Hook
export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({ // se crea un setState para state
        data: [], // valores iniciales
        loading: true
    });

    useEffect(() => { // useEffect para controlar que renderize solo al cambiar category

        getGifs( category ) // obtiene gifs de categoria como promesa
            .then( imgs => { // procesa la promesa exitosa
                setState({ // establece el nuevo 'state'
                    data: imgs,
                    loading: false
                })
            })

    }, [category])

    return state; // retorna el state
}


