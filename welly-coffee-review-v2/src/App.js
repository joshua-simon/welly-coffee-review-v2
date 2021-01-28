import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Main from './components/Main'
import CafeReviews from './components/CafeReviews'
import './styles.css'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path ='/cafe-reviews/:id' component = {CafeReviews}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
