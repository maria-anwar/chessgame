import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChessBoard from './components/ChessBoard'
import Time from './components/Time'
//import Timer from './components/Timer'
import RefClock from './components/RefClock'
//import MyMemo from './components/MyMemo'
import ChessGame from './components/ChessGame'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>  */}
      {/* <ChessBoard /> */}
      {/* <Timer /> */}
      {/* <RefClock /> */}
      {/* <MyMemo /> */}
      <ChessGame />
    </>
  )
}

export default App
