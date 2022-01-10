import { postLogIn } from "../../service/trackit";
import { Body, Container, Logo, Input, Button, GoTo, Forms } from '../shared/StyledComponents.js';
import logo from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { useState, useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import { ThreeDots } from 'react-loading-icons';

export default function LoginPage() {

    const { setUserData } = useContext(UserContext);
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ loading, setLoading ] = useState(false);
    const history = useHistory();

    function login (event) {
        event.preventDefault();
        setLoading(true);

        const body = { email, password };

        const request = postLogIn(body);
        request.then(response => {
            setUserData(response.data);
            history.push('/hoje');
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
                <Forms onSubmit={login}> 
                    <Input disabled={loading} type="email" name="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email} required/>
                    <Input disabled={loading} type="password" name="password" placeholder="senha" onChange={(e) => setPassword(e.target.value)} value={password} required/>
                    <Button disabled={loading}>
                        { loading ?
                        <ThreeDots /> :
                        "Entrar"}
                    </Button>
                </Forms>
                <Link to={`/cadastro`}>
                    <GoTo>Não tem uma conta? Cadastre-se!</GoTo>
                </Link>
            </Container>
        </Body>
    );
}