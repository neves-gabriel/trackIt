import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    ol, ul {
        list-style: none;
    }

    input {
        outline: none;
    }

    button {
        border: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
    
    @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@400;700&display=swap');

    * {
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Lexend+Deca', sans-serif;
      color: #293845;
    }
`;

const Body = styled.div`
    max-width: 375px;
    margin: auto;
    font-family: Lexend Deca;
    font-style: normal;
    font-weight: normal;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
`

const Logo = styled.img`
    margin-top: 68px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 180px;
    height: auto;
    margin-bottom: 28px;
`

const Input = styled.input`
    width: 100%;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 20px;
    padding-left: 10px;

    ::placeholder {
    color: #DBDBDB;
    }
    
    :disabled {
        background: #F2F2F2;
        ::placeholder {
            color: #AFAFAF;
        }
    }
`

const Button = styled.button.attrs({ 
    type: 'submit',
    })`
    width: 100%;
    height: 45px;
    background: #52B6FF;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    text-align: center;
    color: #FFFFFF;
`

const GoTo = styled.p`
    margin-top: 22px;
    font-size: 14px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
    cursor: pointer;
`

const Forms = styled.form`
    display: flex;
    flex-direction: column;
    gap: 6px;
`

export {
    GlobalStyle,
    Body,
    Container,
    Logo,
    Input,
    Button,
    GoTo,
    Forms
}
