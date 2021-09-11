import { postSignUp } from "../../service/trackit";
import { Body, Container, Logo, Input, Button, GoTo, Forms } from '../shared/StyledComponents.js';
import logo from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';

export default function SignupPage() {

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ name, setName ] = useState("");
    const [ image, setImage ] = useState("");
    const history = useHistory();

    function register (event) {

        event.preventDefault();

        const body = {
            email,
            name,
            image,
            password
        }

        postSignUp(body).then( () => history.push('/') ).catch( err => console.log(err.response.data.message) )
    }
  
    return (
        <Body>
        <Logo src={logo}/>
        <Container>
            <Forms onSubmit={register}>
                <Input type="email" name="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email} required/>
                <Input type="password" name="password" placeholder="senha" onChange={(e) => setPassword(e.target.value)} value={password} required/>
                <Input type="text" name="name" placeholder="nome" onChange={(e) => setName(e.target.value)} value={name} required/>
                <Input type="url" name="image" placeholder="foto" onChange={(e) => setImage(e.target.value)} value={image} required/>
                <Button>Cadastrar</Button>
            </Forms>
            <Link to={`/`}>
                <GoTo>Já tem uma conta? Faça login!</GoTo>
            </Link>
        </Container>
    </Body>
    );
}