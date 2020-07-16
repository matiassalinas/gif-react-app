/*
* This app will render two components:
* 1. Add Category (form)
* 2. Gif Grid (divs)
*/

import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifApp = () => {

    
    const [categories, setCategories] = useState(['Programming', 'Soccer']);

    return (
        <>
            <h2>Gif React App</h2>
            <AddCategory setCategories={ setCategories } />
            {
                categories.map( category => (
                    <GifGrid
                        key={ category } 
                        category={ category } 
                    /> 
                ))
            }
        </>
    )
}
