import './App.css'

function App() {
  const items = ['React', 'TypeScript', 'Vite']

  return (
    <section>
    <h1>¡Hola AnthoFu!</h1>
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
