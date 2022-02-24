import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import './App.css'
import Banner from './Components/NavBar/Banner/Banner';
import RowPost from './Components/NavBar/RowPost/RowPost';
import {originals, action, comedy,horror, romatic, documenteries} from './urls/Urls'


function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <RowPost url={originals} title='Netflix Originals'/>
    <RowPost url={action} title='Action' isSmall/>
    <RowPost url={comedy} title='Comedy' isSmall/>
    <RowPost url={horror} title='Horror' isSmall/>
    <RowPost url={romatic} title='Romatic' isSmall/>
    <RowPost url={documenteries} title='Documentaries' isSmall/>
    </div>
  );
}

export default App;
