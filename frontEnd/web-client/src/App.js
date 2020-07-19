import React from 'react';
import './App.css';


import Navbar from './components/Navbar';
import Drawer from './components/Drawer';
import Batteries from './components/Batteries';

function App() {
  return (
    <div className="App">

      <Drawer/>
      <Navbar/>
      <Batteries/>
    
    </div>
  );
}


/*todo components

 navbar t
 drawer w
 custom battery z
 

*/

export default App;
