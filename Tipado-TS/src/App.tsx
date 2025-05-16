import './App.css'
import Button from './components/button/button'
import Counter from './components/counter/counter'
import CounterWithUseReducer from './components/counterWithUseReducer/counterWithUseReducer'

function saludo(name: string):string{
  return `¡Hola, ${name}!`
}

function App() {
  const handleClick = () => alert("¡Acabo de hacer click!")
  console.log(saludo('AnthoFu'))
  
  return (
    <div>
      <Button onclick={handleClick} label={'Hazme click!'}/>
      <hr />
      <Counter/>
      <hr />
      <CounterWithUseReducer/>
    </div>
  )
}

export default App
