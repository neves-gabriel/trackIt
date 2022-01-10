import { postSignUp } from "../../service/trackit";
import { Body, Container, Logo, Input, Button, GoTo, Forms } from '../shared/StyledComponents.js';
import logo from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { ThreeDots } from 'react-loading-icons';

export default function SignupPage() {

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ name, setName ] = useState("");
    const [ image, setImage ] = useState("");
    const [ loading, setLoading ] = useState(false);
    const history = useHistory();

    function register (event) {
        event.preventDefault();
        setLoading(true);

        const body = { email, name, image, password };

        const request = postSignUp(body);
        request.then(response => {
            history.push('/');
            setLoading(false);
        })
        request.catch(err => {
            window.alert( err.response.data.message );
            setLoading(false);
        })
    }
  
    return (
        <Body>
        <Logo src={logo}/>
        <Container>
            <Forms onSubmit={register}>
                <Input disabled={loading} type="email" name="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email} required/>
                <Input disabled={loading} type="password" name="password" placeholder="senha" onChange={(e) => setPassword(e.target.value)} value={password} required/>
                <Input disabled={loading} type="text" name="name" placeholder="nome" onChange={(e) => setName(e.target.value)} value={name} required/>
                <Input disabled={loading} type="url" name="image" placeholder="foto" onChange={(e) => setImage(e.target.value)} value={image} required/>
                <Button disabled={loading}>
                    { loading ?
                    <ThreeDots /> :
                    "Cadastrar"}
                </Button>
            </Forms>
            <Link to={`/`}>
                <GoTo>Já tem uma conta? Faça login!</GoTo>
            </Link>
        </Container>
    </Body>
    );
}