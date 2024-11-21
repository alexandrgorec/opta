import "./PlayerArmory.css"
import { useState } from "react";
import Card from './Card';
import CardMagic from './CardMagic';
import Player from "./Player";


function PlayerArmory({ player, changeState, playerId, imgServer }) {
    const [playerArmory, setPlayerArmory] = useState(null);
    changeState[`player${playerId}`] = setPlayerArmory;
    if (!playerArmory) return (null);
    return (
        <div className={`playerArmory ${player} ${playerArmory.magicSpeciality}Specialist`}>
            <CardMagic magicData={playerArmory.chaos} magic="chaos" imgServer={imgServer} />
            <Card card={playerArmory.head} cardOfComponent="playerArmoryCard" imgServer={imgServer} />
            <CardMagic magicData={playerArmory.earth} magic="earth" imgServer={imgServer} />
            <Card card={playerArmory.body} cardOfComponent="playerArmoryCard" imgServer={imgServer} />
            <CardMagic magicData={playerArmory.water} magic="water" imgServer={imgServer} />
            <Card card={playerArmory.boots} cardOfComponent="playerArmoryCard" imgServer={imgServer} />
            <CardMagic magicData={playerArmory.dark} magic="dark" imgServer={imgServer} />
            <Card card={playerArmory.weapon} cardOfComponent="playerArmoryCard" imgServer={imgServer} />
            <Player magicSpeciality={playerArmory.magicSpeciality} magicSpecialityLvl={playerArmory.magicSpecialityLvl} health={playerArmory.health} armor={playerArmory.armor} healthChange={playerArmory.healthChange} armorChange={playerArmory.armorChange} imgServer={imgServer} />
        </div>
    )
}

export default PlayerArmory;