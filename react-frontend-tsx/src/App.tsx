import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Homepage } from './Pages/Homepage'

const App:React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
