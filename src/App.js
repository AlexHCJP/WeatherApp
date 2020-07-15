import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Weather from './components/Weather';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-danger">
          <a className="navbar-brand" href="#">Expand at md</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="navbar">
            <ul className="navbar-nav ml-auto mr-5">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/weather" className="nav-link">Weather</Link>
              </li>
              <li className="nav-item">
                <Link to="/users" className="nav-link">Users</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/weather">
            <Weather/>
          </Route>
          <Route path="/users">
            Users
          </Route>
          <Route path="/">
            Home
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
