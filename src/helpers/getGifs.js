/* 
* Async function that calls giphy api (https://developers.giphy.com/)
* It will return a object with gifs data (id,title,url)
*/

export const getGifs = async( category ) => {
    const api_key = process.env.REACT_APP_GIPHY_API_KEY
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=8&api_key=${ api_key }`;
    const response = await fetch( url );
    const { data } = await response.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
};