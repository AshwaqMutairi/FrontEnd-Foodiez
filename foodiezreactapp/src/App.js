import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import { Container } from "react-bootstrap";

// Components
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Container>
        <Routes>
          {/* <Route path="/categories/:categorySlug">
            <CategoryDetail />
          </Route>
          <Route path="/categories">
            <CategoryList />
          </Route> */}

          <Route path="/">
            <h4>hello home page</h4>
          </Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
