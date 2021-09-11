import styled from "styled-components";
import { Input, Forms } from '../shared/StyledComponents.js';
import { useState } from 'react';
import DayButton from "./DayButton.js";

export default function CreateHabit() {

    const days = [ "D", "S", "T", "Q", "Q", "S", "S" ];
    const [ habitName, setHabitName ] = useState("");

    return (
        <ContainerCreateHabit>
            <Forms>
                <Input type="text" name="habitName" placeholder="nome do hábito" onChange={(e) => setHabitName(e.target.value)} value={habitName} required/>
                <ContainerDays>
                    {
                        days.map( d => (
                        <DayButton day={d}/>
                        ))
                    }
                </ContainerDays>
                <ContainerButtons>
                    <CancelText>Cancelar</CancelText>
                    <SaveButton>Salvar</SaveButton>
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
    display: flex;
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
` 