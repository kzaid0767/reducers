import './App.css';
import { useReducer, useState } from 'react';

function App() {
  // const [count, setCount] = useState(0)
  /* state variables stay in state, actions are in dispatch */
  /* 2 parameters for reducer: 1. reducer function 2. initial state */

  const [state, dispatch] = useReducer((state, action)=>{
    switch(action.type){
      case 'ADD': {
        return {...state, count: state.count+ 1}
      }
      case 'MINUS' : {
        return {...state, count: state.count- 1}
      }
      default:{
        return state
      }
    }
  },{
    count:0
  })
  
  /* pulling count out of state in order to use it */
  let {count} = state

  const add = () => {
    //setCount(count + 1)
    dispatch({type: 'ADD'})
  }
  
  const subtract = () => {
    if (count > 0) {
      //setCount(count - 1)
      dispatch({type:'MINUS'})
    }
  }
  
  return (
    <section>
      <h2>Counter: The Most Novel Example I Could Come Up With</h2>
      <div className="counter">
        <button onClick={subtract}>-</button>
        <div>{count}</div>
        <button onClick={add}>+</button>
      </div>
    </section>
  )
}

export default App;

<!-- Using useReducer to make custom useState -->

import './App.css';
import { useReducer } from 'react';

/* Using useReducer to implement useState */

function useState (initialValue) {
  let [state, dispatch] = useReducer((state, action)=>{
    return action
  }, initialValue)
  return [state, dispatch]
}



function App() {
  const [count, setCount] = useState(0)
  /* state variables stay in state, actions are in dispatch */
  /* 2 parameters for reducer: 1. reducer function 2. initial state */

 /*  const [state, dispatch] = useReducer((state, action)=>{
    switch(action.type){
      case 'ADD': {
        return {...state, count: state.count+ 1}
      }
      case 'MINUS' : {
        return {...state, count: state.count- 1}
      }
      default:{
        return state
      }
    }
  },{
    count:0
  }) */
  
  /* pulling count out of state in order to use it */
  // let {count} = state

  const add = () => {
    setCount(count + 1)
    // dispatch({type: 'ADD'})
  }
  
  const subtract = () => {
    if (count > 0) {
      setCount(count - 1)
      // dispatch({type:'MINUS'})
    }
  }
  
  return (
    <section>
      <h2>Counter: The Most Novel Example I Could Come Up With</h2>
      <div className="counter">
        <button onClick={subtract}>-</button>
        <div>{count}</div>
        <button onClick={add}>+</button>
      </div>
    </section>
  )
}

export default App;

