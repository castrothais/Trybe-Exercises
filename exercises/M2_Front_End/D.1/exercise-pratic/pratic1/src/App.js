import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const tarefas = ['Estudar', 'Realizar Projetos', 'Ficar Ontrack'];

function App() {
  return (
    <ul>
      {tarefas.map((element) => Task(element))}
    </ul>
    )
}

export default App;
