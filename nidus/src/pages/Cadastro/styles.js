import styled from "styled-components";

export const Container = styled.div`
    width: 200px;
    height: max-content;
    margin: auto;
    background-color: transparent;
    backdrop-filter: blur(5px);
    padding: 20px 15px;
    margin-top: 120px;
    border-radius: 7px;
    font-family: 'Roboto';
    box-shadow: 2px 4px 10px #202124;
`

export const Tittle = styled.h1`
    margin: 0;
    text-align: left;
    margin-bottom: 10px;
    color: #202124;
`

export const LoginForm = styled.form`
    padding: 5px;
`

export const FormField = styled.div`
    display: inline-block;
    padding: 5px;

        input {
            width: 95%;
            padding: 5px;
        }
`

export const FormError = styled.p`
    display: block;
    color: #F20000;
    font-size: 12px;
    font-weight: 400;
`

export const Button = styled.button`
    margin: 10px 5px 0 5px;
    padding: 5px 10px;
    width: 95%;

        &:hover {
            cursor: pointer;
        }
`

export const Info = styled.p`
    font-size: 12px;
    margin-top: 10px;
    
        a {
            color: #FFCE30;
        }
`