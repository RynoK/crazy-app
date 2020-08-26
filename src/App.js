import React, { createContext } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import OptionMenu from './optionMenu';
import DataBaseContextC from './DataBaseContext';
import WelcomePage from './WelcomePage';
import LogInPage from './LogInPage';
import Try from './Try'
import AuthContextProvider from './contexts/AuthContext';





function App() {
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
