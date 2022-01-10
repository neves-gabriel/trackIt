import CreateHabit from "./CreateHabit.js";
import styled from "styled-components";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useState, useContext, useEffect } from 'react';
import HabitContext from '../../contexts/HabitContext';
import UserContext from '../../contexts/UserContext';
import { deleteHabit, getHabits, postLogIn } from "../../service/trackit";
import HabitBox from "./HabitBox.js";

export default function HabitsPage() {

    const [ showCreateHabit, setShowCreateHabit ] = useState("");
    const [ habitIDEliminate, setHabitIDEliminate ] = useState("");
    const { userData, setUserData } = useContext(UserContext);
    const { userHabits, setUserHabits } = useContext(UserContext);

    useEffect(() => {

        const sendHabitsRequest = async () => {
        try {
            const config = {
                headers: { 
                    "Authorization": 'Bearer ' + userData.token
                }
            };
            const res = await getHabits(config);
            console.log(res.data);
            setUserHabits(res.data);
        } catch (err) {
            // Handle Error Here
            console.error(err.response.data.message);
        }
        };
  
        sendHabitsRequest();
    }, []);

    const sendHabitElimination = async () => {
            try {
                const config = {
                    headers: { 
                        "Authorization": 'Bearer ' + userData.token
                    }
                };
                const res = await deleteHabit(habitIDEliminate, config);
            } catch (err) {
                // Handle Error Here
                console.error(err);
            }
    };
  
    return (
      <>
        <Navbar/>
        <Background>
            <Top>
                <TopText>Meus hábitos</TopText>
                <AddButton onClick={ () => setShowCreateHabit(true) } >+</AddButton>
            </Top>
            <HabitContext.Provider value={{ showCreateHabit, setShowCreateHabit }}>
                <CreateHabit/>
            </HabitContext.Provider>
            <HabitContext.Provider value={{ habitIDEliminate, setHabitIDEliminate, sendHabitElimination }}>
                { userHabits.map( userHabits => <HabitBox userHabits={userHabits}/> ) }
            </HabitContext.Provider>
            { userHabits.length === 0 ? <BodyText>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </BodyText> : "" } 
        </Background>
        <Footer/>
      </>
    );
}

const Background = styled.div`
    max-width: 375px;
    height: 100vh;
    margin-top: 70px;
    margin-bottom: 70px;
    margin-right: auto;
    margin-left: auto;
    padding-top: 22px;
    padding-left: 18px;
    padding-right: 18px;
    font-family: Lexend Deca;
    font-style: normal;
    font-weight: normal;
    background: #F2F2F2;
    display: flex;
    flex-direction: column;
    gap: 28px;
    font-family: Lexend Deca;
    font-style: normal;
    font-weight: normal;
`

const Top = styled.div`
    height: 35px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`

const TopText = styled.span`
    font-size: 23px;
    color: #126BA5;
`

const AddButton = styled.button`
    width: 40px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    border: none;
    font-size: 27px;
    text-align: center;
    font-weight: bold;
    color: #FFFFFF;
`

const BodyText = styled.span`
    font-size: 18px;
    color: #666666;

`