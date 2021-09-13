import { postLogIn } from "../../service/trackit";
import { Body, Container, Logo, Input, Button, GoTo, Forms } from '../shared/StyledComponents.js';
import logo from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { useState, useContext } from 'react';
import UserContext from '../../contexts/UserContext';

export default function LoginPage() {

    const { userData, setUserData } = useContext(UserContext);
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const history = useHistory();

    function login (event) {

        event.preventDefault();

        const body = {
            email,
            password
        }

        postLogIn(body).then( res => { history.push('/habitos'); console.log(res.data); setUserData(res.data) } ).catch( err => console.log(err.response.data.message) )
    }
  
    return (
        <Body>
            <Logo src={logo}/>
            <Container>
                <Forms onSubmit={login}> 
                    <Input type="email" name="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email} required/>
                    <Input type="password" name="password" placeholder="senha" onChange={(e) => setPassword(e.target.value)} value={password} required/>
                    <Button>Entrar</Button>
                </Forms>
                <Link to={`/cadastro`}>
                    <GoTo>Não tem uma conta? Cadastre-se!</GoTo>
                </Link>
            </Container>
        </Body>
    );
}