import styled from 'styled-components';

const Body = styled.div`
    max-width: 375px;
    margin: auto;
    font-family: Lexend Deca;
    font-style: normal;
    font-weight: normal;
`

const Container = styled.div`
    flex-direction: column;
    justify-content: center;
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
    margin: 3px;
    font-size: 20px;
    padding-left: 10px;

    ::placeholder {
    color: #DBDBDB;
    }
`

const Button = styled.button.attrs({ 
    type: 'submit',
    })`
    width: 100%;
    height: 45px;
    margin: 3px;
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
export {
    Body,
    Container,
    Logo,
    Input,
    Button,
    GoTo
}
