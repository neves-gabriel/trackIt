import styled from "styled-components";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function HistoryPage() {
    return (
      <>
        <Navbar/>
        <Background>
            <Top>
                <TopText>Histórico</TopText>
            </Top>
            <BodyText>
              Em breve você poderá ver o histórico dos seus hábitos aqui!            
            </BodyText>
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

const BodyText = styled.span`
    font-size: 18px;
    color: #666666;

`