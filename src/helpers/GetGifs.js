// Componente para obtener gifs de una categoria en form asincrona
export const getGifs = async( category ) => { 
    // Se crea un arreglo con los atributos que se necesitan (id, title y url)
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=ZVWjpkBlmPS86GBPpzI6p6KDYiXWjLeG`;
    const resp = await fetch( url ); // espera la respuesta de la url
    const { data } = await resp.json(); // espera en data la conversion a json de la respuesta

    const gifs = data.map( img => { 
        return { // crea un array con id, title y url de cada elemento del array data
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifs; // re torna el array 'gifs'

}
