import React,{Fragment,useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './Components/Layout/Navbar';
import Landing from './Components/Layout/Landing';
import Login from './auth/Login';
import Register from './auth/Register';
import Alert from './Components/Layout/Alert';
import Dashboard from './Components/dashboard/Dashboard';

//Private Route
import PrivateRoute from './Components/routing/PrivateRoute';

//Redux
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import {loadUser} from './actions/auth';

if(localStorage.token){
      setAuthToken(localStorage.token);
    }

const App=()=>{
   
   useEffect(()=>{
      store.dispatch(loadUser());
   },[]);

   return(
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
                           <PrivateRoute exact path='/dashboard' component={Dashboard}/>
                        </Switch>
                    </section>
            </Fragment>
         </Router> 
      </Provider>     
   )};
export default App;
