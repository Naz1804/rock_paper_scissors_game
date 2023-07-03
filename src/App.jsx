import Scoreboard from "./components/Scoreboard"
import Game from "./components/Game"
import Rules from "./components/Rules"
import { useEffect, useState } from "react"

function App() {
  const [count, setCount] = useState(() => {
    const storeCount = localStorage.getItem('count')
    return storeCount ? parseInt(storeCount) : 0
  })
  
  function updateCount(result) {
    if (result === 'win') {
      setCount((prevCounter) => prevCounter + 1);
    } else if (result === 'lose') {
      setCount((prevCounter) => prevCounter - 1);
    }
  };

  useEffect(() => {
    localStorage.setItem('count', count.toString())
  }, [count])

  return (
    <div className="w-screen h-screen flex flex-col bg-gradient-to-b from-onegrad from-10% to-secgrad to-90%">
      <Scoreboard count={count} />
      <Game updateCount={updateCount}/>
      <Rules />
    </div>
  )
}

export default App