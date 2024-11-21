import "./Card.css";
import Tooltip from "./Tooltip"

function Card({ card, cardOfComponent, imgServer, playerId, ws, active }) {
    let handleClick = () => { };
    let handleDropClick = (evt) => { evt.preventDefault()};
    if (active && cardOfComponent == "handCard") {
        handleDropClick = (evt) => {
            evt.preventDefault();
            const wsMessage = {};
            wsMessage.event = "sendIdDroppingCard";
            wsMessage.body = {
                droppingCardId: evt.target.id,
                playerId,
            }
            ws.send(JSON.stringify(wsMessage));
        }
    }
    if (active && card.canPlay && cardOfComponent == "handCard") {
        handleClick = (evt) => {
            const wsMessage = {};
            wsMessage.event = "sendIdPlayingCard";
            wsMessage.body = {
                playingCardId: evt.target.id,
                playerId,
            }
            ws.send(JSON.stringify(wsMessage));
        }
    }
    if (cardOfComponent == "playerArmoryCard")
        return (
            <div key={card.id} className={`relative`}>
                <div style={{ backgroundImage: `url(${imgServer}?img=${card.id}.jpg)` }} className={`playerArmoryCard item`} onClick={handleClick} id={card.id} ></div>
                <Tooltip card={card} imgServer={imgServer}/>
            </div>
        )
    else
        return (

            <div key={card.id} className={`relative ${cardOfComponent} ${card.magic} ${card.canPlay ? "" : "noCanPlay"}`}>
                <div className="cardName">{card.name}</div>
                <div className={`handCardImg ${card.dropped ? "dropped" : ""}`} style={{ backgroundImage: `url(${imgServer}?img=${card.id}.jpg)` }} onClick={handleClick} onContextMenu={handleDropClick} id={card.id} ></div>
                <div className={`cardDescription ${card.description.length > 35 ? "smallText" : ""} ${card.description.length > 45 ? "verySmallText" : ""}`}>{card.description}</div>
                <div className={`cardCost ${card.magic}`}>{card.cost}</div>
                <div style={{ backgroundImage: `url(${imgServer}?img=${card.item}.png)` }} className={`${card.item ? `itemImg ${card.item}` : "" }`}></div>
                <div className={`${card.playAgain ? "playAgain" : ""}`}></div>
            </div>

        )
}

export default Card;

