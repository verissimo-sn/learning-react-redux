
import Gap from './components/Gap';
import Average from './components/Average';
import Sum from './components/Sum';
import Sort from './components/Sort';

import './App.css';

const App = () => {
  return (
    <div className="App">
     <h1>Exercicio React-redux #01</h1>
     <div className="linha">
      <Gap 
      ></Gap>
     </div>
     <div className="linha">
      <Average></Average>
      <Sum></Sum>
      <Sort></Sort>
     </div>
    </div>
  );
}

export default App;
