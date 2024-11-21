import "./GameProcess.css";
import { useState } from 'react';
import Card from "./Card";
import Chat from './Chat';

function GameProcess({ playerId, ws, changeState, active, imgServer }) {
    const [gameProcess, setGameProcess] = useState([]);
    changeState.GameProcess = setGameProcess;
    return (
        <div className="gameProcess">
            <div className={active ? "stepPlayer" : "stepEnemy"}>{active ? "ВАШ ХОД" : "ХОД ПРОТИВНИКА"}</div>
            {
                gameProcess.map(card =>
                    <Card key={card.id} card={card} cardOfComponent={"gameProcessCard"} imgServer={imgServer}/>
                )
            }
             <Chat playerId={playerId} ws={ws} changeState={changeState} />
        </div>
    )
}

export default GameProcess;