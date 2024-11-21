import "./Player.css"
import { useEffect } from "react";
import Tooltip from "./Tooltip";


function Player({ magicSpeciality, magicSpecialityLvl, health, armor, healthChange, armorChange, imgServer, }) {
    const card = {};
    card.id = magicSpeciality + "Specialist";
    switch (magicSpeciality) {
        case "none":
            card.id = "defaultPlayerClass";
            card.name = "Офисный клерк";
            card.description = "Ты никчемный";
            break;
        case "chaos":
            card.name = `Специалист магии хаоса \n${magicSpecialityLvl} уровня`;
            card.description = `Эффективность и стоимость улучшаемых карт магии хаоса увеличиваются на ${25 * magicSpecialityLvl}%`;
            break;
        case "earth":
            card.name = `Специалист магии земли \n${magicSpecialityLvl} уровня`;
            card.description = `Эффективность и стоимость улучшаемых карт магии земли увеличиваются на ${25 * magicSpecialityLvl}%`;
            break;
        case "water":
            card.name = `Специалист магии воды \n${magicSpecialityLvl} уровня`;
            card.description = `Эффективность и стоимость улучшаемых карт магии воды увеличиваются на ${25 * magicSpecialityLvl}%`;
            break;
        case "dark":
            card.name = `Специалист магии тьмы \n${magicSpecialityLvl} уровня`;
            card.description = `Эффективность и стоимость улучшаемых карт магии тьмы увеличиваются на ${25 * magicSpecialityLvl}%`;
            break;
    }
    useEffect(() => {
        let changeValue = document.querySelectorAll(".playerValuesChange");
        changeValue.forEach(item => {
            item.classList.remove("playerChangeUp");
            item.classList.remove("playerChangeDown")
        })
        setTimeout(() => {
            changeValue.forEach(item => {
                if (+item.innerText > 0)
                    item.classList.add("playerChangeUp");
                if (+item.innerText < 0)
                    item.classList.add("playerChangeDown");
            })
        }, 50)

    })
    return (
        <div className="healthPlayerArmor">
            <div className="health">
                {health}
                <div className={`playerValuesChange ${healthChange == 0 ? "noDisplay" : ""}`}>{healthChange}</div>
            </div>
            <div className="armor">
                {armor}
                <div className={`playerValuesChange ${armorChange == 0 ? "noDisplay" : ""}`}>{armorChange}</div>
            </div>
            <div className="playerClass" style={{ backgroundImage: `url(${imgServer}?img=${magicSpeciality == "none" ? 'defaultPlayerClass.jpg' : magicSpeciality + "Specialist.jpg"})` }}>
                <div className="magicSpecialityLvl">{`${magicSpecialityLvl == 0 ? "" : magicSpecialityLvl}`}</div>
            </div>
            <Tooltip card={card} imgServer={imgServer}/>
        </div>
    )
}

export default Player;

