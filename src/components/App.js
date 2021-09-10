import Navbar from "./Navbar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import LoginPage from "./LoginPage/LoginPage";
import SignupPage from "./SignupPage/SignupPage";

export default function App() {

  return (
    <>
      <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <LoginPage />
            </Route>
            <Route path="/cadastro" exact>
              <SignupPage />
            </Route>
          </Switch>
        </BrowserRouter>
    </>
  );
}