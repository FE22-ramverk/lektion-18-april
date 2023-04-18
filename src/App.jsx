import { useDispatch } from 'react-redux'
import './App.css'
import CarsContainer from './Components/CarsContainer'
import { buyVolvo, addVolvo } from './actions/carActions'

function App() {
  const dispatch = useDispatch();

  function handleBuy() {
    // här vill vi kalla på vår action som motsvarar det vi vill göra
    dispatch(buyVolvo(1))
  }
  function handleAdd() {
    // kolla vad man valt för bilmärke
    // if-sats eller liknande för att välja rätt action
    // här vill vi kalla på vår action som motsvarar det vi vill göra
    dispatch(addVolvo(3))
  }

  return (
    <div className="App">
      <CarsContainer />
      <select>
        <option value="volvo">VOLVO</option>
        <option value="audi">AUDI</option>
        <option value="skoda">SKODA</option>
      </select>
      <button onClick={handleBuy}>BUY</button>
      <button onClick={handleAdd}>ADD</button>
    </div>
  )
}

export default App
