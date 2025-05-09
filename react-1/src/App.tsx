import './App.css'
import Card from './components/card';
import Counter from './components/counter'
import ToggleButton from './components/toggleButton';

function App() {
  const items = ['React', 'TypeScript', 'Vite']

  return (
    <section>
    <h1>¡Hola, Bienvenido al proyecto de react de AnthoFu!</h1>
    <Card title="Card 1" description="Esta es una descripcion, una 'Prop'"/>
    <Card title="Card 2" description="Esta es una segunda card"/>
    <Card title="Card 3" description="Esta es una tercera card"/>
    <Counter/>
    <ToggleButton/>
    <ul>
      {
      items.map((item, index) => (
        <li key={index}>{item}</li>
      ))
    }
    </ul>
      
    </section>
  );
}

export default App
