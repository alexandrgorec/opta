import "./Tooltip.css";

function Tooltip({ card, imgServer }) {
    return (
        <div className="tooltip">
            <div>{card.name}</div>
            <div style={{ backgroundImage: `url(${imgServer}?img=${card.id}.jpg)` }} className="tooltipImg"></div>
            <div>{card.description}</div>
        </div>
    )
}

export default Tooltip;