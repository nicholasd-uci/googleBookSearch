import React from 'react'
import Home from './pages/Home'
import Home from './pages/Saved'
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link
} from 'react-router-dom'
import Saved from './pages/Saved'

const App = () => {
  return(
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/saved">Saved</Link>
        </nav>
        <Switch>
          <Router exact path="/" component={Home} />
          <Router path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>
  )
}
