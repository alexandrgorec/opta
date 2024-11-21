import "./AppWrapper.css"
import PlayerArmory from "./PlayerArmory";
import Hand from "./Hand";
import GameProcess from "./GameProcess";
import { useState } from "react";

function AppWrapper({ playerId, ws, changeState, imgServer }) {
    const [stepActivePlayerId, setStepActivePlayerId] = useState(false);
    changeState.stepActive = setStepActivePlayerId;
    const [loosers, setEndGame] = useState(null);
    changeState.loosers = setEndGame;
    let endGameMessage = null;
    if (loosers) {
        endGameMessage = <div className={`endGame ${loosers[`player${playerId}`]  ? "looser" : "winner"}`}></div>
    }
    return (
        <div className="appWrapper">
            <PlayerArmory player={"player"} playerId={playerId} changeState={changeState} imgServer={imgServer} />
            <PlayerArmory player={"enemy"} playerId={playerId == 1 ? 2 : 1} changeState={changeState} imgServer={imgServer} />
            <GameProcess playerId={playerId} ws={ws} changeState={changeState} active={stepActivePlayerId === playerId} imgServer={imgServer} />
            <Hand playerId={playerId} ws={ws} changeState={changeState} imgServer={imgServer} active={stepActivePlayerId === playerId} />
            {endGameMessage}
        </div>

    )
}

export default AppWrapper;