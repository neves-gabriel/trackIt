import { postLogIn } from "../../service/trackit";
import { Body, Container, Logo, Input, Button, GoTo, Forms } from '../shared/StyledComponents.js';
import logo from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import UserContext from '../../contexts/UserContext';
import { ThreeDots } from 'react-loading-icons';

export default function LoginPage() {

    const { userData, setUserData } = useContext(UserContext);
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ loading, setLoading ] = useState(false);
    const history = useHistory();

    useEffect(() => {
        if (
          localStorage.getItem("token") !== "" &&
          localStorage.getItem("token") !== null
        ) {
            setUserData(
                {
                    "id": localStorage.getItem("id"),
                    "name": localStorage.getItem("name"),
                    "image": localStorage.getItem("image"),
                    "email": localStorage.getItem("email"),
                    "password": localStorage.getItem("password"),
                    "token": localStorage.getItem("token"),
                }
            );
            history.push("/hoje");
            return;
        }
        setLoading(false);
    }, [userData]);

    function login (event) {
        event.preventDefault();
        setLoading(true);

        const body = { email, password };

        const request = postLogIn(body);
        request.then(response => {
            setUserData(response.data);
            localStorage.setItem("id", response.data.id);
            localStorage.setItem("name", response.data.name);
            localStorage.setItem("image", response.data.image);
            localStorage.setItem("email", response.data.email);
            localStorage.setItem("password", response.data.password);
            localStorage.setItem("token", response.data.token);
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