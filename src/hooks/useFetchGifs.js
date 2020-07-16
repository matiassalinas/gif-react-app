/* 
* This hook will call getGifs helper at the first render or category changes 
* Return a state with gifs data and loading status
*/

import { useState, useEffect } from "react"
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect( () => {
        getGifs( category )
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            }) 
    }, [ category ])

    return state;
}