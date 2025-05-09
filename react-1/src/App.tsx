import './App.css'
import Card from './components/card';

function App() {
  const items = ['React', 'TypeScript', 'Vite']

  return (
    <section>
    <h1>¡Hola AnthoFu!</h1>
    <Card title="Card 1" description="Esta es una descripcion, una 'Prop'"/>
    <Card title="Card 2" description="Esta es una segunda card"/>
    <Card title="Card 3" description="Esta es una tercera card"/>
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
