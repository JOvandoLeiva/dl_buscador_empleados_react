
import './App.css';
import data from './data/data';
import NavBar from './Components/Nav';
import List from './Components/List';
import { useState } from 'react';


function App() {

  const [collab, setCollab] = useState(data);

  return (
    <div className="container-fluid">
      <NavBar/>
      <div className="container-fluid">

        <List />

      </div>
    
    </div>

    

  );
}

export default App;
