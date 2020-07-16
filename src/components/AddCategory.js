/*
* This component will render a form for adding new category
*/

import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {
    
    const [inputValue, setInputValue] = useState('');
    /* On input change */
    const handleSetInput = ({ target }) =>  setInputValue(target.value);
    /* On form submit */
    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (inputValue.trim().length > 2) {
            setCategories((categories) => [inputValue, ...categories]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit = { handleSubmit }>
            <input 
                type = "text"
                value = { inputValue }
                onChange = { handleSetInput }
            />
            <hr />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired,
}
