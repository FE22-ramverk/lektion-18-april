import { useDispatch } from 'react-redux'
import './App.css'
import CarsContainer from './Components/CarsContainer'
import { buyCar, addCar } from './actions/carActions'

function App() {
  const dispatch = useDispatch();

  function handleBuy() {
    // här vill vi kalla på vår action som motsvarar det vi vill göra
    dispatch(buyCar('volvo', 1))
  }
  function handleAdd() {
    // här vill vi kalla på vår action som motsvarar det vi vill göra
    dispatch(addCar('volvo', 3))
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
