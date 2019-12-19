import React,{Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './Components/Layout/Navbar';
import Landing from './Components/Layout/Landing';
import Login from './auth/Login';
import Register from './auth/Register';
import Alert from './Components/Layout/Alert';
//Redux
import { Provider } from 'react-redux';
import store from './store';


const App=()=>
      <Provider store={store}>
         <Router> 
            <Fragment>
                    <Navbar />
                    <Route exact path='/' component={Landing}/>
                    <section className="container">
                        <Alert />
                        <Switch>
                           <Route exact path='/register' component={Register}/>
                           <Route exact path='/login' component={Login}/>
                        </Switch>
                    </section>
            </Fragment>
         </Router> 
      </Provider>     

export default App;
