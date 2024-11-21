import "./Hand.css"
import { useState } from 'react';
import Card from "./Card";

function Hand({ playerId, changeState, ws, active, imgServer }) {
    const [hand, setHand] = useState([]);
    changeState.Hand = setHand;

    return (
        <div className={`hand ${active ? "handActive" : "handNoActive"}`}>
            {
                hand.map(card =>
                    <Card key={card.id} card={card} cardOfComponent="handCard" imgServer={imgServer} playerId={playerId} ws={ws} active={active} />
                )
            }
        </div>
    )
}
export default Hand;