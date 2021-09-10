import Navbar from "./Navbar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from "./LoginPage/LoginPage";
import SignupPage from "./SignupPage/SignupPage";
import HabitsPage from "./HabitsPage/HabitsPage";

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
            <Route path="/habitos" exact>
              <HabitsPage />
            </Route>
          </Switch>
        </BrowserRouter>
    </>
  );
}