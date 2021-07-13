import React, { Suspense, lazy } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Store from './services/Store';
import {useSelector,useDispatch} from "react-redux";
import {Provider} from "react-redux";



const registration = lazy(() => import('./componenets/userRegistration'));



function App() {
 
     return (
    <Provider store={Store}>
    <div className="App">
      <Router>
        <Switch>
          <Suspense fallback="">
     
            <Route exact path="/" component={registration} />
        
          </Suspense>

        </Switch>
      </Router>
    </div>
   </Provider>
  );
}

export default App;
