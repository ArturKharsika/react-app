import { useState } from 'react';
import './App.css';
import AddNumber from './components/AddNumber/AddNumber';

const App = () => {
  const [ text, setText ] = useState('start text');
  const [ active, setActive ] = useState(false);
  const [ show, setShow ] = useState(false);

  const [data, setData] = useState([1, 2, 3]);

  const addDataHandler = (val) => {
    const num = Number(val);
    setData([...data, num]);
    console.log(num);
  }

  return (
    <div className="App" >

      <h1>React APP</h1>

      <div className="add-number-block">

        <AddNumber addDataHandler={ addDataHandler }/>
        <p>{ data }</p>

      </div>

      
      <input onChange={(e) => setText(e.target.value)} value={ text } type="text" />
      <p>{ text }</p>

      <div className={ !active ? 'box' : 'box active' }></div>
      <button onClick={() => setActive(!active)}>toggle</button>

      { show && <div className="box"></div> }

      <button onClick={ () => setShow(!show) }>show/hide</button>

    </div>
  );
}

export default App;
