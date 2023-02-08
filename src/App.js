import logo from './logo.svg';
import './App.css';
import{Home} from './Home';
import {Department} from './Department';
import { Employee } from './Employee';
import {Navigation} from './Navigation';

import{BrowserRouter,Route} from 'react-router-dom';
import{Switch} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div className="container">
    <h3 className = "m-3 d-flex justify-content-center"> 
    React JS Tutorial
    </h3>
   <Navigation/>
    <Switch>
     <Route path ='/' Component={Home} exact/>
      <Route path ='/department' Component={Department}/>
      <Route path ='/employee' Component={Employee}/>
      </Switch>
  

    </div>
    </BrowserRouter>
  );
}

export default App;
