import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from '../../components/App/Header/Header';
import xFilesCharacters from '../../containers/x-filesContainer';



export default function App() {
  return (
    <>
      <Router>
        <Header /> 
        <Switch>
          <Route exact path="/" component={xFilesCharacters} />
        </Switch>
      </Router>
    </>
  );
}
  
