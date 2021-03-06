import styled from "styled-components";
import { useContext } from 'react';
import { days } from "../../data/days.js";
import trash from '../../assets/trash.svg';
import UserContext from "../../contexts/UserContext.js";
import { deleteHabit } from "../../service/trackit.js";


export default function HabitBox({ habit, loadHabits }) {

    const { userData } = useContext(UserContext);

    function deleteThisHabit() {
		const confirmed = window.confirm("Tem certeza de que quer deletar este hábito?");
		if (confirmed)
			deleteHabit(userData.token, habit.id)
				.then(() => loadHabits());
	}

    return (
        <ContainerHabit>
            <HabitTitle>{habit.name}</HabitTitle>
            <ContainerDays>
                { days.map( days => <DaysButtons selected={ habit.days.includes(days.number) } type="button">{days.day}</DaysButtons> ) }
            </ContainerDays>
            <ContainerTrash  src={trash} onClick={deleteThisHabit} />
        </ContainerHabit>   
    );
}

const ContainerHabit = styled.div`
    width: 340px;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 15px;
    position: relative;
`

const HabitTitle = styled.p`
    font-size: 20px;
    color: #666666;
    margin-bottom: 8px;
`

const DaysButtons = styled.button`
    width: 30px;
    height: 30px;
    box-sizing: border-box;
    border-radius: 5px;
    font-family: Lexend Deca;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;

    background-color: ${props => (props.selected === true ? '#CFCFCF' : '#FFFFFF')};
    border: ${props => (props.selected === true ? '1px solid #CFCFCF' : ' 1px solid #D5D5D5')};
    color: ${props => (props.selected === true ? '#FFFFFF' : ' #DBDBDB')};
` 

const ContainerDays = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    gap: 4px;
`

const ContainerTrash = styled.img`
    width: 13px;
    height: auto;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
`