import styled from "styled-components";
import { Input, Forms } from '../shared/StyledComponents.js';
import { useState, useContext } from 'react';
import DayButton from "./DayButton.js";
import UserContext from '../../contexts/UserContext';
import { postCreateHabit } from "../../service/trackit.js";
import { days } from "../../data/days.js";

export default function CreateHabit({ showCreateHabit, setShowCreateHabit, loadHabits }) {

    const { userData } = useContext(UserContext);
    const [ habitName, setHabitName ] = useState("");
    const [ habitDays, setHabitDays ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    function saveHabit (event) {
        event.preventDefault();

        const body = { name: habitName, days: habitDays };

        const request = postCreateHabit(userData.token, body);
        request.then(response => {console.log(response.data);
            setLoading(false);
            setShowCreateHabit(false);
            loadHabits();
        })
        request.catch(err => {
            window.alert( err.response.data.message );
            setLoading(false);
        })
    }

    return (
        <ContainerCreateHabit >
            <Forms onSubmit={saveHabit}>
                <Input disabled={loading} type="text" name="habitName" placeholder="nome do hábito" onChange={(e) => setHabitName(e.target.value)} value={habitName} required/>
                <ContainerDays>
                    { days.map( days => <DayButton disabled={loading} days={days} habitDays={habitDays} setHabitDays={setHabitDays} /> ) }
                </ContainerDays>                        
                <ContainerButtons>
                    <CancelText onClick={ () => setShowCreateHabit(false) } >Cancelar</CancelText>
                    <SaveButton disabled={loading} type="submit">Salvar</SaveButton>
                </ContainerButtons>
            </Forms>
        </ContainerCreateHabit>
    );

}

const ContainerCreateHabit = styled.div`
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 18px;
    transition: all .3s ease .15s;
    flex-direction: column;
    gap: 8px;
    font-family: Lexend Deca;
    font-style: normal;
    font-weight: normal;
    position: relative;
`

const ContainerDays = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    gap: 4px;
`

const ContainerButtons = styled.div`
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: flex-end;
    gap: 7px;
    position: absolute;
    bottom: 15px;
    right: 15px;
`

const CancelText = styled.span`
    font-family: Lexend Deca;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    text-align: center;
    color: #52B6FF;
    cursor: pointer;
`

const SaveButton = styled.button`
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    border: none;
    font-family: Lexend Deca;
    font-style: normal;
    font-weight: normal;
    font-size: 15.976px;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
` 