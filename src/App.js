import './App.css';
import { useReducer } from 'react';

/* Using useReducer to implement custom hook*/

function useCounter() {

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'ADD': {
        return { ...state, count: state.count + 1 }
      }
      case 'MINUS': {
        return { ...state, count: state.count - 1 }
      }
      default: {
        return state
      }
    }
  }, {
    count: 0
  })

  return [state, dispatch]
}



function Count() {
  const [state, dispatch] = useCounter()

  let { count } = state

  const add = () => {
    dispatch({ type: 'ADD' })
  }

  const subtract = () => {
    if (count > 0) {
      dispatch({ type: 'MINUS' })
    }
  }

  return (
    <section>
      <h2>Counter: Yet Another Counter Example</h2>
      <div className="counter">
        <button onClick={subtract}>-</button>
        <div>{count}</div>
        <button onClick={add}>+</button>
      </div>
    </section>
  )
}

const App= ()=>{
  return <div>
    <Count />
  </div>
}
export default App;

