import React from 'react';
import ReactDOM from 'react-dom';
import '../animate.css';


const PlayerModal = ({manOfTheMatch, homeTeam, awayTeam, currentPlayer, firstTry, lastScorers, anyTime, firstScorer2ndHalf, toScore2orMore, toScore3orMore, firstHalfAny, secondHalfAny, homeTeamFirstTry, awayTeamFirstTry}) => {
    const firstTryPrice = firstTry.filter(player => player.Name === currentPlayer)[0].Price;
    const lastTryPrice = lastScorers.filter(player => player.Name === currentPlayer)[0].Price;
    const anyTimePrice = anyTime.filter(player => player.Name === currentPlayer)[0].Price;
    const firstTry2ndHalfPrice = firstScorer2ndHalf.filter(player => player.Name === currentPlayer)[0].Price;
    const toScore2orMorePrice = toScore2orMore.filter(player => player.Name === currentPlayer)[0].Price;
    const toScore3orMorePrice = toScore3orMore.filter(player => player.Name === currentPlayer)[0].Price;
    const firstHalfAnyPrice = firstHalfAny.filter(player => player.Name === currentPlayer)[0].Price;
    const secondHalfAnyPrice = secondHalfAny.filter(player => player.Name === currentPlayer)[0].Price;
    const homeTeamFirstTryPrice = homeTeamFirstTry.filter(player => player.Name === currentPlayer)[0].Price || null;
    const awayTeamFirstTryPrice = awayTeamFirstTry.filter(player => player.Name === currentPlayer)[0].Price || null;
    const currentPlayerTeam = firstTry.filter(player=> player.Name === currentPlayer)[0].HADValue;
    const manOfTheMatchPrice = manOfTheMatch.filter(player => player.Name === currentPlayer)[0].Price;
    currentPlayer = currentPlayer.split(",").reverse().join(",").replace(",", " ");
    return ReactDOM.createPortal(
        <div className="playerModal animated pulse">
        <h2 className="modalHeader">{currentPlayer} Betting</h2>
        <ul>
             <li>First Try: {firstTryPrice}</li>
             <li>Last Try: {lastTryPrice}</li>
             <li>AnyTime Try Scorer: {anyTimePrice}</li>
             <li>First Try 2nd Half: {firstTry2ndHalfPrice}</li>
             <li>To Score Two Or More: {toScore2orMorePrice}</li>
             <li>To Score Three Or More: {toScore3orMorePrice}</li>
             <li>First Half Anytime Try Scorer: {firstHalfAnyPrice}</li>
            <li>Second Half Anytime Try Scorer: {secondHalfAnyPrice}</li>
            
            {
                currentPlayerTeam === 'H' ? <li>{homeTeam} First Try Scorer: {homeTeamFirstTryPrice}</li> : <li>{awayTeam} First Try Scorer: {awayTeamFirstTryPrice}</li>
            }
            <li>Man Of The Match: {manOfTheMatchPrice}</li>
        </ul>
        </div>,
        document.getElementById("portal-root")
    );
}
export default PlayerModal;