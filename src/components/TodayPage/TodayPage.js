import styled from "styled-components";
import Footer from "../Footer";
import Navbar from "../Navbar";
import dayjs from "dayjs";
import { useState, useContext, useEffect } from 'react';
import HabitContext from '../../contexts/HabitContext';
import UserContext from '../../contexts/UserContext';
import { getTodayHabits, checkHabit, uncheckHabit } from "../../service/trackit";
import check from "../../assets/check.svg";
import { Link, useHistory } from 'react-router-dom';

export default function TodayPage() {
  
    const { userData, setUserData } = useContext(UserContext);
    const { userHabits, setUserHabits } = useContext(UserContext);
    const { todayHabits, setTodayHabits } = useContext(UserContext);
    const [ markedCheck, setMarkedCheck ] = useState("");
    const [ habitToBeChecked, setHabitToBeChecked ] = useState("");
    const history = useHistory();

    useEffect(() => {

      const sendTodayRequest = async () => {
        try {
            const config = {
                headers: { 
                    "Authorization": 'Bearer ' + userData.token
                }
            };
            const res = await getTodayHabits(config);
            console.log(res.data);
            setTodayHabits(res.data);
        } catch (err) {
            // Handle Error Here
            console.error(err.response.data.message);
        }
      };

      sendTodayRequest();
    }, []);

    function markCheck () {

      if (markedCheck === true) {
          setMarkedCheck();
          sendHabitUnchecked(habitToBeChecked);
      } else {
         setMarkedCheck(true);
         sendHabitChecked(habitToBeChecked);
      } 
    }

    function sendHabitChecked() {

      const config = {
        headers: { 
            "Authorization": 'Bearer ' + userData.token
        }
      }

      checkHabit(habitToBeChecked, config).then( () => history.push('/hoje') ).catch( err => console.log(err.response.data.message) )

    }

    function sendHabitUnchecked() {

      const config = {
        headers: { 
            "Authorization": 'Bearer ' + userData.token
        }
      }
      
      uncheckHabit(habitToBeChecked, config).then( () => history.push('/hoje') ).catch( err => console.log(err.response.data.message) )

    }

    return (
      <>
        <Navbar/>
        <Background>
          <Top>
            <TitleText>hohe</TitleText>
            <SubTitleText>hohe</SubTitleText>
          </Top>
          {todayHabits.map( todayHabits =>  <ContainerTodayHabit>
              <TopText>{todayHabits.name}</TopText>
              <BottomText>Sequência atual: {todayHabits.currentSequence} dias</BottomText>
              <BottomText>Seu recorde: {todayHabits.highestSequence} dias</BottomText>
              <ContainerCheck selected={markedCheck} onClick={ () => { markCheck(); setHabitToBeChecked(todayHabits.id); }}>
                <Check src={check}/>
              </ContainerCheck>
          </ContainerTodayHabit>) } 
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
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

`

const TitleText = styled.p`
  font-size: 23px;
  color: #126BA5;
  text-align:left;
  margin-bottom: 5px;
`
const SubTitleText = styled.p`
  font-size: 18px;
  color: #BABABA;
  text-align:left;
`

const TopText = styled.p`
    font-size: 20px;
    color: #666666;
`

const BottomText = styled.p`
    font-size: 13px;
    color: #666666;
    text-align: left;
`

const ContainerTodayHabit = styled.div`
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-family: Lexend Deca;
    font-style: normal;
    font-weight: normal;
    position: relative;
`

const ContainerCheck = styled.div`
    position: absolute;
    top: 13px;
    right: 13px;
    cursor: pointer;
    width: 69px;
  height: 69px;
  border: 1px solid #E7E7E7;
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  justify-content:center;
  align-items: center;

  background: ${props => (props.selected === true ? '#8FC549' : '#EBEBEB')};
`

const Check = styled.img`
  width: 35,09px
  height: auto
`