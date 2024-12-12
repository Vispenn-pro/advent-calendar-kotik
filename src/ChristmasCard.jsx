import './App.css';
import './wowhead.css'
import rewards from "./rewards.json";
import { useCookies } from 'react-cookie';

function ChristmasCard({ day, daysLeftParam }) {

    // ADD A DIFFERENT SHADOW FOR DIFFERENT RARITY
    // https://html-css-js.com/css/generator/box-shadow/
    const cardClass = `adventCalendarCard availableCard ${rewards[`${day}`].rarity}`
    const rewardClass = `modal-body adventCalendarReward`
    const cardDataTarget = `#card${day}`;
    const cardId = `card${day}`;
    const cookieId = `hasCard${day}BeenOpened`;

    let audioOpen = new Audio("/advent-calendar-kotik/sounds/achievement.ogg");
    let audioDenied = new Audio("/advent-calendar-kotik/sounds/denied.ogg");

    const [cookies, setCookie] = useCookies([cookieId]);

    const startOpen = () => {
        audioOpen.volume = 0.1;
        audioOpen.play();
        setCookie(cookieId, true);
    }

    const startDenied = () => {
        audioDenied.volume = 0.1;
        audioDenied.play();
    }

    return (
        <>
            {daysLeftParam > 0 ?
                <div onClick={startDenied} className={cardClass}>
                    <span className="unavailableCard">Days left : {daysLeftParam}</span>
                </div>
                :
                <button onClick={startOpen} className={cardClass} data-toggle="modal" data-target={cardDataTarget}>
                    {cookies[cookieId] ?
                        <div className="openedCard">
                            <div dangerouslySetInnerHTML={{__html: rewards[`${day}`].image}}></div>
                        </div>
                        :
                        day
                    }
                </button>
            }
            <div className="modal fade" id={cardId} tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className={rewardClass}>
                            <div dangerouslySetInnerHTML={{__html: rewards[`${day}`].image}}></div>
                            <div dangerouslySetInnerHTML={{__html: rewards[`${day}`].description}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChristmasCard
