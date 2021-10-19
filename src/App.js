import "./App.css";
import Header from "./pages/Shared/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./pages/Shared/Footer/Footer";
import SignIn from "./pages/Login/SignIn/SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./pages/Shared/NotFound/NotFound";
import AuthProvider from "./contexts/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <SignIn></SignIn>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
