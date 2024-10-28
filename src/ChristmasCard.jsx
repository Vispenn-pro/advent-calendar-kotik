import './App.css';
import './wowhead.css'
import rewards from "./rewards.json";

function ChristmasCard({ day, daysLeftParam, isVisibleParam }) {


    // ADD A DIFFERENT SHADOW FOR DIFFERENT RARITY
    // https://html-css-js.com/css/generator/box-shadow/
    const cardClass = `adventCalendarCard ${rewards[`${day}`].rarity}`

    return (
        <>
            <div className={cardClass}>
                <div dangerouslySetInnerHTML={{__html: rewards[`${day}`].image}}></div>
                <div dangerouslySetInnerHTML={{__html: rewards[`${day}`].description}}></div>
            </div>
        </>
    )
}

export default ChristmasCard
