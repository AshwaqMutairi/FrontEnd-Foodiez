import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import CategoryList from "./components/CategoryList";
// import { Route, Switch } from "react-router";
// import Moment from "react-moment";

function App() {
  return (
    <div>
      <NavBar />
      {/* <Switch> */}
      {/* <Route exact path="/category-list"> */}
      {/* <CategoryList /> */}
      {/* </Route> */}

      {/* // <Route exact path="/"> */}
      <Home />
      {/* <CategoryList /> */}
      {/* </Route> */}
      {/* </Switch> */}
    </div>
  );
}

export default App;
