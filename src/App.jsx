import { useState } from 'react';
import './App.css'
import ColorBoard from './components/ColorBoard';
import Glow from './components/Glow'

function App() {

  const [color, setColor] = useState({
    r: 200,
    g: 200,
    b: 0,
    a: 1
  });

  const [show, setShow] = useState(false);

  return (
      <div className="App">
      <button onClick={() => setShow(!show)}>{show ? "Destroy component" : "Mount component"}</button>
        { show && (
          <>
            <ColorBoard setColor={setColor} />
            <Glow color={color}/>
          </>
        )}
      </div>
  )
}

export default App
