import React from 'react';
import {Route} from 'react-router-dom';
import Main from './components/main';
import AnimalPage from './components/animalPage';

function App() {
  return (
    <React.Fragment>
      <Route exact path='/' component={Main} />
      <Route path='/animals/:id' component={AnimalPage} />
    </React.Fragment>
  );
}

export default App;
