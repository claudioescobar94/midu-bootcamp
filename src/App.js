import './App.css';
import { Mensaje } from './Mensaje';

const App =() => {

  return (
    <div className="App">
      <Mensaje color='red' title="Hola pedos"/>
      <Mensaje color='green' title="Hola pedos"/>
      <Mensaje title="Hola pedos"/>
    </div>
  );
}

export default App;
