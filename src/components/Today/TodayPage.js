import styled from "styled-components";
import Footer from "../Footer";
import Navbar from "../Navbar";
import dayjs from "dayjs";
import { useState, useContext, useEffect } from 'react';
import UserContext from '../../contexts/UserContext';
import { getTodayHabits, checkHabit, uncheckHabit } from "../../service/trackit";
import check from "../../assets/check.svg";

export default function TodayPage() {
  
    const { userData } = useContext(UserContext);
    const { progress, setProgress } = useContext(UserContext);
    const [todayHabits, setTodayHabits] = useState([]);

    useEffect(() => {
      loadHabits();
    }, []);

    useEffect(() => {
      if (todayHabits.length > 0) {
        updateProgress();
      }
    }, [todayHabits]);

  function loadHabits() {
      const request = getTodayHabits(userData.token);
      request.then(response => {
        setTodayHabits(response.data);
        updateProgress(response.data);
      })
  }

  function getToday() {
		require("dayjs/locale/pt-br");
		const today = dayjs().locale('pt-br');
		return today;
	}

  function updateProgress() {
		const todayHabitsDone = todayHabits.filter(habit => habit.done);
		setProgress((todayHabitsDone.length / todayHabits.length * 100).toFixed(0));
	}

  function clickHabit(habit) {
		if (!habit.done) {
			checkHabit(userData.token, habit.id)
				.then(() => loadHabits());
		} else {
			uncheckHabit(userData.token, habit.id)
				.then(() => loadHabits());
		}
  }

    return (
      <>
        <Navbar currentPage={"/hoje"} />
        <Background>
          <Top>
            <TitleText>
              {getToday().locale('pt-br').format("dddd[, ]DD/MM")}
            </TitleText>
            <SubTitleText progress={progress > 0 ? true : false}>
              {progress === "0" ? "Nenhum hábito concluído ainda" : progress === "100" ? "Parabéns! Você concluiu todos os seus hábitos de hoje" : `${progress}% dos hábitos concluídos`}
            </SubTitleText>
          </Top>

					{todayHabits.length > 0 ? todayHabits.map((habit, index) => (
						<ContainerTodayHabit key={habit.id} isDone={habit.done}>
                <TopText>{habit.name}</TopText>
								<BottomText isDone={habit.done}>Sequência atual: {habit.currentSequence} dias</BottomText>
                <BottomText brokeRecorde={habit.currentSequence >= habit.highestSequence && habit.currentSequence > 0 ? true : false}>Seu recorde: {habit.highestSequence} dias</BottomText>
              <ContainerCheck selected={habit.done} onClick={() => clickHabit(habit, index)} >
                <Check src={check}/>
              </ContainerCheck>
						</ContainerTodayHabit>
					)) : "Nenhum hábito pra hoje!"
					}

        </Background>
        <Footer progress={progress} />
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
  width: 340px;
    height: 35px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const TitleText = styled.p`
  font-size: 23px;
  color: #126BA5;
  text-align:left;
  margin-bottom: 5px;
`
const SubTitleText = styled.p`
  font-size: 18px;
  text-align:left;
  color: ${props => props.progress? "#8FC549" : "#BABABA"};
`

const TopText = styled.p`
    font-size: 20px;
    color: #666666;
    word-break: break-word;
    width: 210px;
`

const BottomText = styled.p`
    font-size: 13px;
    color: #666666;
    text-align: left;
    color: ${props => props.isDone ? "#8FC549" : "inherit"};
    color: ${props => props.brokeRecorde ? "#8FC549" : "inherit"};
`

const ContainerTodayHabit = styled.div`
    width: 340px;
    min-height: 94px;
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