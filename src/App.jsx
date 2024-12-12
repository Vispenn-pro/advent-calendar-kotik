import DateCountdown from 'react-date-countdown-timer';
import './App.css';
import ChristmasCard from "./ChristmasCard.jsx";

function App() {
    const days = [];

    for(let i = 2; i <= 26; i++){
        let daysLeft = 0;

        let today = new Date();
        let cardDay = new Date("12/" + i + "/2024");

        let Difference_In_Time =
            cardDay.getTime() - today.getTime();

        daysLeft = Math.round(Difference_In_Time / (1000 * 3600 * 24));

        days.push(<ChristmasCard key={i} day={i - 1} daysLeftParam={daysLeft} />)
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
