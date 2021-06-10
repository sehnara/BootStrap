import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';

import {Provider} from 'react-redux'; // 1. redux
import { combineReducers, createStore } from 'redux';

// 1. default State 
const defaultState = [
  
];

const defaultAlert = true;

// 2. reducer method 생성 
// state 수정이 필요할 때는 redux는 따로 정의해놓아야 한다.
function reducer(state=defaultState, action){
  if(action.type === 'add'){
    const copied = [...state];    
    const updated = copied.filter((item)=>{
      return item.id === action.id
    })    
    updated[0].quantity++; 
    return copied;
  }
  else if(action.type === 'sub'){    
    const copied = [...state];    
    const updated = copied.filter((item)=>{
      return item.id === action.id
    })
    
    let num =  updated[0].quantity===0?0:updated[0].quantity--;   
    num--;
    
    return copied;
  }
  else if(action.type === 'order'){
    // 이미 있는 품목은 
    const updated = [...state, action.item];
    return updated;
  }
  else{
    return state;
  }
}

function reducer2(state=defaultAlert, action){
  if(action.type === 'close'){
    state = false;
    return state;
  }
  else{
    return state;
  }
}

// 3. createStore
// 하나가 아닐 경우에는 combineReducers를 써서 배열로 넘겨준다.
const store = createStore(combineReducers({reducer,reducer2}));

ReactDOM.render(
  <React.StrictMode>
    <Provider 
      store ={store}       
    >         
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
