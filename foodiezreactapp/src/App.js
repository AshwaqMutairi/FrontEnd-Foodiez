import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router";
import { Container } from "react-bootstrap";

// Components
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Container>
        <Switch>
          <Route path="/categories/:categorySlug">
            <CategoryDetail />
          </Route>
          <Route path="/categories">
            <CategoryList />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
