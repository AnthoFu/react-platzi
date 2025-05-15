import './App.css'
import Button from './components/button/button'

function App() {
  const handleClick = () => alert("¡Acabo de hacer click!")
  
  return (
    <Button onclick={handleClick} label={'Hazme click!'}/>
  )
}

export default App
