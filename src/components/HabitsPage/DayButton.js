import styled from "styled-components";

export default function DayButton({ day }) {

    return (
        <DaysButtons type="button">{day}</DaysButtons>
    );
}

const DaysButtons = styled.button`
    width: 30px;
    height: 30px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    font-family: Lexend Deca;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: #DBDBDB;
` 