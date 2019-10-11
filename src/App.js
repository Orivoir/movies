import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import routes from './routes';

export default class App extends React.Component {
  
  render() {

    return (
      <>
        <Switch>
          {
            routes.map( route => (
              <Route
                key={route.id}
                component={route.component}
                path={route.path}
                exact={route.exact}
              />
            ) )
          }
        </Switch>
      </>
    );
  }
}


