import Navbar from "./Navbar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from "./Login/LoginPage";
import SignupPage from "./Signup/SignupPage";
import HabitsPage from "./Habits/HabitsPage";
import TodayPage from "./Today/TodayPage";
import HistoryPage from "./History/HistoryPage";
import { useState, useEffect } from "react";
import UserContext from '../contexts/UserContext';
import { getHabits, postLogIn } from "../service/trackit";
import { GlobalStyle } from "./shared/StyledComponents";

export default function App() {

  const [userData, setUserData] = useState({});
  const [userHabits, setUserHabits] = useState([]);
  const [todayHabits, setTodayHabits] = useState([]);

  return (
    <>
      <UserContext.Provider value={{ userData, setUserData, userHabits, setUserHabits, todayHabits, setTodayHabits }}>
        <GlobalStyle />
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
                <Route path="/hoje" exact>
                  <TodayPage />
                </Route>
                <Route path="/historico" exact>
                  <HistoryPage />
                </Route>
              </Switch>
          </BrowserRouter>
        </UserContext.Provider>
    </>
  );
}