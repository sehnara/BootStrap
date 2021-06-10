import './app.css';
import {} from 'react-bootstrap';

import NavBar from './components/1_header/navBar';
import Jumbo1 from './components/1_header/jumbo1';
import Store from './components/2_body/store';
import Cards from './components/2_body/card';
import { useState } from 'react';
import data from './Data/data';

function App(props) {
  const [items, setItems] = useState(data);

  return (
    <div className="App">

      {/* header */}
      <NavBar />
      <Jumbo1 />

      {/* body */}
      <div className="card_container">
        {items.map((item)=>{return <Cards 
          item = {item}        
        />})}      
      </div>
      <Store/>
      
    </div>
  );
}
export default App;
