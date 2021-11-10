import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import CategoryList from "./components/CategoryList";
import RecipeList from "./components/RecipeList";
import { Route, Switch } from "react-router";
// import Moment from "react-moment";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/recipes">
          <RecipeList />
        </Route>

        <Route exact path="/categories">
          <CategoryList />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
