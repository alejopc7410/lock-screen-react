import {useState, useEffect} from 'react'

function Home_Screen({isUnlocked, changePassword, unlockState}) {
    const [time, setTime] = useState('')
    const [password, setPassword] = useState('')
    const [isChanging, setIsChanging] = useState(false)
    const [day, setDay] = useState('')
    
    useEffect(() => {
        setInterval(() => {
            let todaysDate = new Date()
            let currentTime = `${todaysDate.getHours().toString().padStart(2, 0)}:${todaysDate.getMinutes().toString().padStart(2, 0)}`
            let currentDay = `${todaysDate.toDateString()}`
            setTime(currentTime)            
            setDay(currentDay)            
        }, 1000)
    }, [time])

    const handleInputChange = (event) => {
        setPassword(event.target.value)
    }

    const handlePasswordChange = () => {
        changePassword(password)
        setIsChanging(false)
        // Cleaning the input
        setPassword('')
    }

    return (
        <div className='home-screen' style={{display: isUnlocked ? 'block' : 'none'}}>
            <section className='time'>
                <h2>{time}</h2>
                <p>{day}</p>
            </section>
            <section className='home-menu'>
                <button style={{display: !isChanging ? "block" : "none"}} onClick={() => {setIsChanging(true)}}>Change Password</button>
                <button style={{display: !isChanging ? "block" : "none"}} onClick={() => {unlockState(false)}}>Lock Device</button>
                <div className='change-password-input' style={{display: isChanging ? "flex" : "none"}}>
                    <input 
                        type='text'
                        value={password}
                        onChange={handleInputChange}
                    />
                    <button onClick={handlePasswordChange}>Change</button>
                </div>
            </section>
        </div>
    )
}

export default Home_Screen