import React, { createContext } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import OptionMenu from './optionMenu';
import DataBaseContextC from './DataBaseContext';
import WelcomePage from './WelcomePage';
import LogInPage from './LogInPage';
import Try from './Try'
import AuthContextProvider from './contexts/AuthContext';
import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";





function App() {
  <h1> do you SEE THIS?<h1>
  return (

    <>

    <BrowserRouter>
    <DataBaseContextC>




        <Route exact path='/'component={LogInPage}/>
        <Route path='/user'component={WelcomePage}/>
        <Route path='/try'component={Try}/>





    </DataBaseContextC>
    </BrowserRouter>

    </>

  )


}

export default App;
