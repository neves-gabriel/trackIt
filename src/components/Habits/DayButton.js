import styled from "styled-components";
import { useState, useContext } from 'react';
import HabitContext from '../../contexts/HabitContext';

export default function DayButton({ days, habitDays, setHabitDays }) {


    const [ selectedDay, setSelectedDay ] = useState("");
    const numberDay = days.number;

    function selectDay () {

        if (selectedDay === true) {
            setSelectedDay();
            const filteredDays = habitDays.filter(n => n !== numberDay);
            setHabitDays(filteredDays);
        } else {
           setSelectedDay(true);
           setHabitDays([...habitDays, numberDay]);
        } 
    }

    return (
        <DaysButtons selected={selectedDay} onClick={selectDay} type="button">{days.day}</DaysButtons>
    );
}

const DaysButtons = styled.button`
    width: 30px;
    height: 30px;
    box-sizing: border-box;
    border-radius: 5px;
    font-family: Lexend Deca;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    cursor: pointer;

    background-color: ${props => (props.selected ? '#CFCFCF' : '#FFFFFF')};
    border: ${props => (props.selected ? '1px solid #CFCFCF' : ' 1px solid #D5D5D5')};
    color: ${props => (props.selected ? '#FFFFFF' : ' #DBDBDB')};
` 