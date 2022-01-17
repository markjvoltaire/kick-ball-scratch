import './App.css';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';

import Teams from './Views/Teams';
import Players from './Views/Players';
import Player from './Views/Player';
import Team from './Views/Team';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome To KickBall</h1>
      </header>

      <p>Find Your Favorite Team or Player</p>

      <BrowserRouter>
        <NavLink to="teams">Teams</NavLink>
        <NavLink to="players">Players</NavLink>
        <NavLink to="/">Home</NavLink>

        <Switch>
          <Route exact path="/" />
          <Route exact path="/teams" component={Teams} />
          <Route exact path="/players" component={Players} />
          <Route exact path="/players/:id" component={Player} />
          <Route exact path="/teams/:id" component={Team} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
