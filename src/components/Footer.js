import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "../styles/react-circular-progressbar.css";

export default function Footer({ }) {

  return (
    <Bottom>
      <BottomText>Hábitos</BottomText>
      <ContainerProgressBar>
        <CircularProgressbar
        value={50}
        text="Hoje"
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#3e98c7",
          textColor: "#fff",
          pathColor: "#fff",
          trailColor: "transparent"
        })}
        />
      </ContainerProgressBar>
      <BottomText>Histórico</BottomText>
    </Bottom>
  );
} 

const Bottom = styled.div`
  position: fixed;
  width: 100%;
  height: 70px;
  left: 0;
  bottom: 0;
  background: #FFFFFF;
  padding-right: 36px;
  padding-left: 36px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: Lexend Deca;
  font-style: normal;
  font-weight: normal;
`

const BottomText = styled.span`
  font-size: 18px;
  text-align: center;
  color: #52B6FF;
  font-weight: 400;
`

const ContainerProgressBar = styled.div`
  width: 91px ; 
  height: 91px ; 
  margin-bottom: 40px;
`