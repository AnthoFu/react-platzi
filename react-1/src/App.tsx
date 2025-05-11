import './App.css'
import Card from './components/card/card';
import Counter from './components/counter'
import ToggleButton from './components/toggleButton';
import AnthoFu from './assets/AnthoFu.png'
import NameForm from './components/nameForm';
import CounterWithEffect from './components/counterWithEffect';
import Img from './assets/AnthoFu - Logo.jpg'
import Button from './components/button';
import TailwindText from './components/text';

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
      <Card title="AnthoFu" tag="Etiqueta" img={Img} description="Esta es una descripcion, una 'Prop' o una propiedad por asi decirlo." />
      <hr />
      <Counter />
      <hr />
      <ToggleButton />
      <hr />
      <h2>Formulario de nombre</h2>
      
      <NameForm />
      <hr />
      <CounterWithEffect/>
      <hr />
      <Button> Gris </Button>
      <Button blue>Azul</Button>
      <hr />
      <TailwindText></TailwindText>
    </section>
  );
}

export default App
