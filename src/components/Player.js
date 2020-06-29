import React from 'react';
import home from '../castleford_home.png';
import away from '../leeds_home.png';

const Player = ({player, handleClick}) => {

    return(
        <div className="playerContainer">
            {player.HADValue === 'H' ?
        <img src={home} className="playerImage" alt="player home kit"/>
            : 
            <img src={away} className="playerImage" alt="player away kit"/>
            }
        <div className="player" key={player.Name}>{player.Name}</div>
        </div>
    )
}

export default Player;