import React  from 'react';
import AppContext from './AppContext';
import getPage from './marketjson';
import backImage from './rugby.jpg';
import Header from './components/Header';
import MainPlayerDisplay from './components/MainPlayerDisplay';
import './App.css';
import './animate.css';

function App() {

  const message = {message:"this is a test message"};
  const page = getPage();
  const matchWinnerMarket = page.Markets.find(market => market.Name === "MATCH WINNER (80 MINUTES)");
  const firstTryScorersMarket = page.Markets.find(market => market.Name === "1ST TRYSCORER");
  const firstScorers = firstTryScorersMarket.Selections.filter(player => player.Name !== 'No Tryscorer');
  const lastScorers = page.Markets.find(market => market.Name === "LAST TRYSCORER").Selections.filter(player => player.Name !== 'No Tryscorer');
  const anyTime = page.Markets.find(market => market.Name === "ANYTIME TRYSCORER").Selections.filter(player => player.Name !== 'No Tryscorer');
  const firstScorer2ndHalf = page.Markets.find(market => market.Name === "1ST TRYSCORER OF THE 2ND HALF").Selections.filter(player => player.Name !== 'No Tryscorer');
  const toScore2orMore = page.Markets.find(market => market.Name === "TO SCORE 2 OR MORE TRIES").Selections;
  const toScore3orMore = page.Markets.find(market => market.Name === "TO SCORE 3 OR MORE TRIES").Selections;
  const firstHalfAny = page.Markets.find(market => market.Name === "1ST HALF ANYTIME TRYSCORER").Selections;
  const secondHalfAny = page.Markets.find(market => market.Name === "2ND HALF ANYTIME TRYSCORER").Selections;
  const homeTeam = matchWinnerMarket.Selections.filter(team => team.HADValue === 'H')[0].Name.toUpperCase();
  const awayTeam = matchWinnerMarket.Selections.filter(team => team.HADValue === 'A')[0].Name.toUpperCase();

  const homeTeamFirstTry = page.Markets.find(market => market.Name === `${homeTeam} 1ST TRYSCORER`).Selections;
  const awayTeamFirstTry = page.Markets.find(market => market.Name === `${awayTeam} 1ST TRYSCORER`).Selections;

  const manOfTheMatch = page.Markets.find(market => market.Name === "MAN OF THE MATCH").Selections;
  

  
  const changeOpacity = (bool) => {
    let mp = document.querySelector(".mainPage");
    if(bool === true) {
     
     mp.classList.add("dull");
   
    }
    else {
      mp.classList.remove("dull")
    }
  }
  console.log(firstScorers);
 
  return (
    <AppContext.Provider value={message}>
    <div className="App">

      <section className="mainPage">
        <img className="backImage" src={backImage} alt="main background"/>
       
        <Header  matchTitle={matchWinnerMarket.EventName}/>
        
        <MainPlayerDisplay playerList={firstScorers}
         lastScorers={lastScorers} anyTime={anyTime} 
         firstScorer2ndHalf={firstScorer2ndHalf}
          toScore2orMore={toScore2orMore}
          toScore3orMore={toScore3orMore}
          firstHalfAny={firstHalfAny}
          secondHalfAny={secondHalfAny}
          homeTeamFirstTry={homeTeamFirstTry}
          awayTeamFirstTry={awayTeamFirstTry}
          homeTeam={homeTeam}
          awayTeam={awayTeam}
          manOfTheMatch={manOfTheMatch}
          changeOpacity={changeOpacity}/>
          
      </section>
    </div>
    </AppContext.Provider>
  );
}

export default App;
