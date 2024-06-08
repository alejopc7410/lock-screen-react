import { useState, useEffect } from "react"
import Number_Btn from "./Number-Btn"

function LockScreen() {
    const currentPassword = 564130;
    const [isCorrect, setIsCorrect] = useState(null)
    const [inputValue, setInputValue] = useState('')
    const [previousValues, setValues] = useState([])
    const numbers = []
    for (let i=9; i>=0; i--) { i === 0 ? numbers.push(i) : numbers.unshift(i) }

    const checkPassword = () => {
        if (inputValue === currentPassword.toString()) {
            setIsCorrect(true)
            setInputValue("Access Granted")
            setTimeout(() => {
                setIsCorrect(null)
                setInputValue('');
                setValues([])
            }, 5000)                
        }
        else {
            setInputValue("Try Again")
            setIsCorrect(false)
            setTimeout(() => {
                setIsCorrect(null)
                setValues([]) 
                setInputValue('');
            }, 5000)
        }        
    }

    useEffect(() => {
        if (inputValue.length === 6) {
            checkPassword()
        }
    }, [inputValue])

    const handleInputChanges = (id) => {
        setValues((previousVal) => {
            const newValues = [...previousVal, id] 
            setInputValue(newValues.join(''));
            return newValues;
        });
    };    

    return (
        <>
            <div className="password">
                <input 
                    type={isCorrect != null ? isCorrect ? "text" : "text" : "password"} 
                    className={isCorrect != null ? isCorrect ? "isCorrect" : "isIncorrect" : ""}
                    value={inputValue}
                    disabled
                />
            </div>
            <div className='lock-inputs'>
                <div className="keypad">
                    {numbers.map((number) => {
                        return (<><Number_Btn id={number} onClickFunc={handleInputChanges}/></>)
                    })}
                </div>
            </div>
        </>
    )
}


export default LockScreen