import LockScreen from "./components/Lock-Screen";
import Home_Screen from "./components/Home-Screen";
import {useState, useEffect} from 'react'

function App() {
  /* This variable for checking what element (Home_Screen or LockScreen) show*/
  const [isUnlocked, setIsUnlocked] = useState(false)

  /* This is for checking and stablish the 'screen' effects and style */
  const [stateStyle, setStateStyle] = useState(null) 

  const [password, setPassword] = useState();

  const initializePassword = () => {
    const passwordStatus = localStorage.getItem("hasPasswordChanged"); 
    
    /* 564130 is the default password */
    if (passwordStatus === null) {
      localStorage.setItem("currentPassword", 564130)
    }
    
    // To avoid timing issues, we'll read from local storage directly here
    const currentPassword = localStorage.getItem("currentPassword");
    setPassword(currentPassword);
  };

  /* When the page or document is opened, this will execute the callback function just one time */
  useEffect(initializePassword, []) 
  
  /* This function will be passed to LockScreen component and will come back with the value whether the 'screen' is locked or unlocked */
  const checkUnlockState = (stateValue) => {
    setIsUnlocked(stateValue) 
  }
  
  /* This function is the same above function but this is for style purpose */
  const checkStateStyle = (stateValue) => {
    setStateStyle(stateValue) 
  }
  
  const changePassword = (newPassword) => {
    setPassword(newPassword)
    /* Updating the password in local storage */
    localStorage.setItem("currentPassword", newPassword) 

    /* Updating the password status */
    localStorage.setItem("hasPasswordChanged", true)
  }

  return (
    <main>
      <div className="screen-container">
        <div className={stateStyle != null ? stateStyle ? "screen unlocked" : "screen locked" : "screen"}>
          <div className="glass">            
            <Home_Screen isUnlocked={isUnlocked} changePassword={changePassword} unlockState={checkUnlockState}/> 
            {!isUnlocked && <LockScreen password={password} isUnlocked={checkUnlockState} stateStyle={checkStateStyle}/>}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
