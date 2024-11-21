import "./CardMagic.css"
import { useEffect } from "react";
import Tooltip from "./Tooltip"

function CardMagic({ magic, imgServer, magicData }) {
    let magicName;
    const card = { id: magic };
    switch (magic) {
        case "chaos":
            magicName = "ХАОС";
            card.name = `Магия хаоса ${magicData.lvl} уровня`;
            card.description = `Вы получаете по ${magicData.lvl < 1 ? 1 : magicData.lvl} очк. магии хаоса каждый ход`;
            break;
        case "earth":
            magicName = "ЗЕМЛЯ";
            card.name = `Магия земли ${magicData.lvl} уровня`;
            card.description = `Вы получаете по ${magicData.lvl < 1 ? 1 : magicData.lvl} очк. магии земли каждый ход`;
            break;
        case "water":
            magicName = "ВОДА";
            card.name = `Магия воды ${magicData.lvl} уровня`;
            card.description = `Вы получаете по ${magicData.lvl < 1 ? 1 : magicData.lvl} очк. магии воды каждый ход`;
            break;
        case "dark":
            magicName = "ТЬМА";
            card.name = `Магия тьмы ${magicData.lvl} уровня`;
            card.description = `Вы получаете по ${magicData.lvl < 1 ? 1 : magicData.lvl} очк. магии тьмы каждый ход`;
            break;
    }
    useEffect(() => {
        let changeValue = document.querySelectorAll(".changeValue");
        changeValue.forEach(item => {
            item.classList.remove("changeUp");
            item.classList.remove("changeDown")
        })
        setTimeout(() => {
            changeValue.forEach(item => {
                if (+item.innerText > 0)
                    item.classList.add("changeUp");
                if (+item.innerText < 0)
                    item.classList.add("changeDown");
            })
        }, 50)

    })
    return (
        <div>
            <div className="relative">
                <div className="magicName">{magicName}</div>
                <div className="magicLvl">{magicData.lvl}</div>
                <div className="magicCard" style={{ backgroundImage: `url(${imgServer}?img=${magic}.jpg)` }}></div>
                <Tooltip card={card} imgServer={imgServer} />
            </div>
            <div className={`magicInfo ${magic}`}>{magicData.hits}
                <div className={`changeValue ${magicData.hitsChange == 0 ? "noDisplay" : ""}`}>{`${magicData.hitsChange}`}</div>
            </div>
        </div>
    )
}

export default CardMagic;