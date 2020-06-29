import React, { useState } from 'react';
import Player from './Player';
import PlayerModal from './PlayerModal';
const MainPlayerDisplay = ({manOfTheMatch ,homeTeam, awayTeam, playerList, changeOpacity, lastScorers, anyTime, firstScorer2ndHalf, toScore2orMore, toScore3orMore, firstHalfAny, secondHalfAny, homeTeamFirstTry, awayTeamFirstTry}) => {
    const homePlayers = playerList.filter(player => player.HADValue === 'H');
    const awayPlayers = playerList.filter(player => player.HADValue === 'A');

    let [modalOn, setModalOn] = useState(false);
    let [currentPlayer, setCurrentPlayer] = useState("");
    const handleClick = (e) => {
        if(!modalOn && e.target.className === "player") {
           setModalOn(true);
           setCurrentPlayer(e.target.innerText);
           changeOpacity(true);
        }
        else if(modalOn) {
            setModalOn(false);
            changeOpacity(false)
        }

       // setModalOn(!modalOn);
    }
    return (
        <div className="playerListContainer" onClick={handleClick}> 
            <section className="homePlayerList">
                {homePlayers.map((player, index) => {
                    return(
                        <React.Fragment>
                        <Player player={player} key={player.Name}/>
                        </React.Fragment>
                    )
                })}

            </section>
            <section className="awayPlayerList">
            {awayPlayers.map((player, index) => {
                    return(
                        <Player player={player} key={player.Name}/>
                    )
                })}
            </section>
            {modalOn && <PlayerModal currentPlayer={currentPlayer}
             firstTry={playerList} lastScorers={lastScorers} 
             anyTime={anyTime} firstScorer2ndHalf={firstScorer2ndHalf} 
             toScore2orMore={toScore2orMore}
             toScore3orMore={toScore3orMore}
             firstHalfAny={firstHalfAny}
             secondHalfAny={secondHalfAny}
             homeTeamFirstTry={homeTeamFirstTry}
             awayTeamFirstTry={awayTeamFirstTry}
             homeTeam={homeTeam}
             awayTeam={awayTeam}
             manOfTheMatch={manOfTheMatch}/> 
                
                }
        </div>
    )
}

export default MainPlayerDisplay;