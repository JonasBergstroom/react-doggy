import "./App.css";
import Home from "./components/HomePage";
import ListofDogs from "./components/ListofDogs";
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom"

function App() {
  return (
  <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <header>
          <Link className="Logo" to="/Home">
            <h2>Home</h2>
          </Link>
        </header>

        <main>
        <Switch>
          <Route exact path="/Home"> <Home /> </Route>
          <Route exact path="/Dogs"> <ListofDogs /> </Route>
        </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
