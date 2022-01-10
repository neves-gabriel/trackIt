import CreateHabit from "./CreateHabit.js";
import styled from "styled-components";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useState, useContext, useEffect } from 'react';
import UserContext from '../../contexts/UserContext';
import { getHabits } from "../../service/trackit";
import HabitBox from "./HabitBox.js";

export default function HabitsPage() {

    const [ showCreateHabit, setShowCreateHabit ] = useState(false);
    const { userData } = useContext(UserContext);
    const [ userHabits, setUserHabits ] = useState([]);

    useEffect(() => {
        loadHabits();
	},[]);

    function loadHabits() {
        const request = getHabits(userData.token);
        request.then(response => {
            setUserHabits(response.data);
        })
    }
  
    return (
      <>
        <Navbar currentPage={"/habitos"} />
        <Background>
            <Top>
                <TopText>Meus hábitos</TopText>
                <AddButton onClick={ () => setShowCreateHabit(true) } >+</AddButton>
            </Top>
            <CreateHabit showCreateHabit={showCreateHabit} setShowCreateHabit={setShowCreateHabit} loadHabits={loadHabits} />
    
			{userHabits.length > 0 ? userHabits.map(habit => (
				<HabitBox key={habit.id} habit={habit} loadHabits={loadHabits} />
			)) : <BodyText>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</BodyText>}

        </Background>
        <Footer/>
      </>
    );
}

const Background = styled.div`
    min-height: 100vh;
    margin-top: 70px;
    margin-bottom: 70px;
    margin-right: auto;
    margin-left: auto;
    padding-top: 22px;
    padding-bottom: 30px;
    padding-left: 18px;
    padding-right: 18px;
    font-family: Lexend Deca;
    font-style: normal;
    font-weight: normal;
    background: #F2F2F2;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;
    font-family: Lexend Deca;
    font-style: normal;
    font-weight: normal;
`

const Top = styled.div`
    height: 35px;
    width: 340px;
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
    width: 340px;
`