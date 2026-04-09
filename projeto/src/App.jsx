import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [denuncia, setDenuncia] = useState(0);

  if (denuncia) {
      return (
      <h1>
        pedido feito com sucesso
      </h1>
    )
  }
  return (
    <>
    <p>desgraçada burger</p>
      <img src="A.png" width="1920" height="920" onClick={() => {setDenuncia(true)}}></img>
    </>
  )
}

export default App
