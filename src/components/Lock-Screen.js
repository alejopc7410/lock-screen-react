import { useState, useEffect } from "react"
import Number_Btn from "./Number-Btn"
import { FaBackspace } from "react-icons/fa";

function LockScreen({isUnlocked, password, stateStyle}) {
    const [isCorrect, setIsCorrect] = useState(null)
    const [inputValue, setInputValue] = useState('')
    const [previousValues, setValues] = useState([])
    const numbers = []
    for (let i=9; i>=0; i--) { i === 0 ? numbers.push(i) : numbers.unshift(i) }

    const checkPassword = () => {
        if (inputValue === `${password}`) {
            setIsCorrect(true)
            stateStyle(true)
            isUnlocked(true)
            setTimeout(() => {
                stateStyle(null)
                setValues([])
            }, 2200)                
        }
        else {
            setInputValue("Try Again")
            setIsCorrect(false)
            stateStyle(false)
            isUnlocked(false)
            setTimeout(() => {
                setIsCorrect(null)
                stateStyle(null)
                setValues([]) 
                setInputValue('');
            }, 2200)
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

    const deleteNumFromInput = () => {
        setValues((prevVal) => {
            const newValues = prevVal.slice(0, -1)
            setInputValue(newValues.join(''))
            return newValues;
        });
    };

    return (
        <>
            <div className="password">
                <input 
                    type={isCorrect != null ? isCorrect ? "password" : "text" : "password"} 
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
                    {inputValue.length > 0 ? <Number_Btn icon={<FaBackspace/>} onClickFunc={deleteNumFromInput}/> : <><span></span></>}
                </div>
            </div>
        </>
    )
}


export default LockScreen