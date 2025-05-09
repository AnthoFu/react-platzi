import './App.css'
import Card from './components/card';
import Counter from './components/counter'
import ToggleButton from './components/toggleButton';
import AnthoFu from './assets/AnthoFu.png'
import NameForm from './components/nameForm';
import CounterWithEffect from './components/counterWithEffect';

function App() {
  const items = ['React', 'TypeScript', 'Vite']

  return (
    <section>
      <img className='logo' src={AnthoFu} alt="" />
      <h1>¡Hola, Bienvenido al proyecto de react de AnthoFu!</h1>
      <hr />
      <p>Este proyecto utiliza:</p>
      <ul>
        {
          items.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
      <hr />
      <Card title="Card 1" description="Esta es una descripcion, una 'Prop'" />
      <hr />
      <Counter />
      <hr />
      <ToggleButton />
      <hr />
      <h2>Formulario de nombre</h2>
      
      <NameForm />
      <hr />
      <CounterWithEffect/>
    </section>
  );
}

export default App
