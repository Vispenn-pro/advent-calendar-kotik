import DateCountdown from 'react-date-countdown-timer';

import './App.css';
import ChristmasCard from "./ChristmasCard.jsx";

function App() {
    const days = [];

    for(let i = 2; i <= 26; i++){
        let isVisible = false;
        let daysLeft = 0;

        const todaysDateObj = new Date();
        const todaysDate = todaysDateObj.getUTCDate() + 1;

        const targetsDateObj = new Date("October " + i + " 2024 GMT+03:00");
        const targetsDate = targetsDateObj.getUTCDate();

        if(todaysDate >= targetsDate){
            isVisible = true;
        } else{
            isVisible = false;
            daysLeft = 25 - targetsDate;
        }
        days.push(<ChristmasCard key={i} day={i - 1} daysLeftParam={daysLeft} isVisibleParam={isVisible}/>)
    }

    return (
        <>
            <div className="adventCalendarMain">
                <h1>My kotik's advent Calendar</h1>
                <p>
                    Christmas in&nbsp;
                    <DateCountdown dateTo='December 25 2024, 00:00:01 GMT+05:00'/>
                </p>
                <div className="adventCalendar">
                    {days}
                </div>
            </div>
        </>
    )
}

export default App
