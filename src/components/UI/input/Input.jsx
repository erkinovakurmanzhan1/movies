import React from 'react';
import { forwardRef } from 'react';
import styled from 'styled-components';


const Input = forwardRef(({labelName,id,inputType },ref) => {


    return (
        <>
            <LabelStyled htmlFor={id}>{labelName}</LabelStyled>
            <InputStyled type={inputType} id={id} ref={ref}/>
        </>
    );
})

export default Input;

const InputStyled = styled.input`
    width: 350px;
    height: 35px;
    outline: none;
    background-color: bisque;
    border: 1.5px solid grey;
    margin-bottom: 2rem;

`
const LabelStyled = styled.label`
    font-size: 18px;
`

