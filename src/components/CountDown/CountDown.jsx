import './CountDown.css';
import { useRef, useEffect } from 'react';

const CountDown = () => {
    const timeLeftRef = useRef({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const timerRef = useRef(null); // To store the interval reference

    useEffect(() => {
        const eventDate = new Date("Dec 21, 2024 12:00:00").getTime();

        const updateTimer = () => {
            const timeNow = new Date().getTime();
            const timeRemaining = eventDate - timeNow;

            if (timeRemaining > 0) {
                timeLeftRef.current = {
                    days: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((timeRemaining % (1000 * 60)) / 1000),
                };
                updateDOM();
            } else {
                clearInterval(timerRef.current);
            }
        };

        const updateDOM = () => {
            document.querySelector('.days2 span').textContent = timeLeftRef.current.days;
            document.querySelector('.hours span').textContent = timeLeftRef.current.hours;
            document.querySelector('.minutes span').textContent = timeLeftRef.current.minutes;
            document.querySelector('.seconds span').textContent = timeLeftRef.current.seconds;
        };

        timerRef.current = setInterval(updateTimer, 1000);

        return () => clearInterval(timerRef.current);
    }, []);

    return (
        <section className='countdown'>
            <div className='countdown-content'>
                <h2>Hack ends in</h2>
                <div className='countdown-timer'>
                    <div className='countdown-box days2'>
                        <span>0</span>
                        <p>Day</p>
                    </div>
                    <div className='countdown-box hours'>
                        <span>0</span>
                        <p>Hour</p>
                    </div>
                    <div className='countdown-box minutes'>
                        <span>0</span>
                        <p>Min</p>
                    </div>
                    <div className='countdown-box seconds'>
                        <span>0</span>
                        <p>Sec</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CountDown;
