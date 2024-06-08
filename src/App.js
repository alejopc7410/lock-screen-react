import LockScreen from "./components/Lock-Screen";

function App() {
  return (
    <main>
      <div className="screen-container">
        <div className="screen">
          <div className="glass"></div>
          <div className="user-lock-screen">
            <LockScreen/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
