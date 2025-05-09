import './App.css'
import Card from './components/card';
import Counter from './components/counter'
import ToggleButton from './components/toggleButton';
import AnthoFu from './assets/AnthoFu.png'
import NameForm from './components/nameForm';

function App() {
  const items = ['React', 'TypeScript', 'Vite']

  return (
    <section>
      <img className='logo' src={AnthoFu} alt=""/>
    <h1>¡Hola, Bienvenido al proyecto de react de AnthoFu!</h1>

        <p>Este proyecto utiliza:</p>
        <ul>
      {
      items.map((item, index) => (
        <li key={index}>{item}</li>
      ))
    }
    </ul>

    <Card title="Card 1" description="Esta es una descripcion, una 'Prop'"/>
    <Counter/>
    <ToggleButton/>

    <h2>Formulario de nombre</h2>
    <NameForm/>
    </section>
  );
}

export default App
