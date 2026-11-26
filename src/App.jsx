import './App.css'
import Header from './components/Header'
import Prueba from './components/Prueba'

function App() {
  const titulo = 'Ballet Luxor'
  return (
    <>
      <Header titulo = {titulo} />
      <Prueba />
    </>
  )
  
}

export default App
