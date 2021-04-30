import "./App.css";
import Home from "./components/HomePage";
import ListofDogs from "./components/ListofDogs";
import Dogs from"./components/Dogs";
import { Route, HashRouter as Router, Link, Switch } from "react-router-dom"

function App() {
  return (
  <Router basename="/">
      <div className="App">
        <header>
          <Link className="Logo" to="/">
            <h2>Home</h2>
          </Link>
        </header>
        <main>
        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route exact path="/List"> <ListofDogs /> </Route>
          <Route exact path="/Dogs/:chipNumber"> <Dogs/> </Route>
        </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
