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
    // här vill vi kalla på vår action som motsvarar det vi vill göra
    dispatch(addVolvo(3))
  }

  return (
    <div className="App">
      <CarsContainer />
      <button onClick={handleBuy}>BUY</button>
      <button onClick={handleAdd}>ADD</button>
    </div>
  )
}

export default App
