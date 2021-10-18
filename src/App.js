import "./App.css";
import Header from "./pages/Shared/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./pages/Shared/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./pages/Shared/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
