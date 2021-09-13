import Navbar from "./Navbar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from "./LoginPage/LoginPage";
import SignupPage from "./SignupPage/SignupPage";
import HabitsPage from "./HabitsPage/HabitsPage";
import { useState } from "react";
import UserContext from '../contexts/UserContext';

export default function App() {

  const [userData, setUserData] = useState({});

  return (
    <>
      <UserContext.Provider value={{ userData, setUserData }}>
        <BrowserRouter>
            <Switch>
              <Route path="/" exact>
                <LoginPage />
              </Route>
              <Route path="/cadastro" exact>
                <SignupPage />
              </Route>
              <Route path="/habitos" exact>
                <HabitsPage />
              </Route>
            </Switch>
          </BrowserRouter>
        </UserContext.Provider>
    </>
  );
}