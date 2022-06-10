import { Input as BaseInput} from '@chakra-ui/react'
import React, { useRef } from "react";

function Input({ inputValue }){
    const inputRef = useRef();
    function handleSubmit(e){
        e.preventDefault();
        inputValue(inputRef.current.value)

    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="input">TODO LIST </label><BaseInput id="input" ref={inputRef}></BaseInput>
        </form>
    )
}

export default Input