import React from 'react';
import {Home,Signup,Signin,Browse} from './pages'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import useAuthListener from './hooks/use-auth-listener';

export default function App(){
  
    const {user} = useAuthListener();
    //console.log(user);
    return (
      <>
        <BrowserRouter>
        
          <Route exact path={ROUTES.HOME}> <Home /> </Route>
          <ProtectedRoute exact path = {ROUTES.BROWSE} user={user}>
            <Browse />
          </ProtectedRoute>
          <Route exact path={ROUTES.SIGN_UP} > <Signup /></Route>
          <IsUserRedirect
            user = {user}
            loggedInPath = {ROUTES.BROWSE}
            exact path = {ROUTES.SIGN_IN}
          >
            <Signin />
          </IsUserRedirect>
          

        </BrowserRouter>
      </>
    );
}

