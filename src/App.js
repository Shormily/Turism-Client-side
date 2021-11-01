import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Home/Header/Header";
import Home from "./Components/Home/Home";
import AboutUS from "./Components/Home/AboutUS/AboutUS";
import Services from "./Components/Home/Services/Services";
import Footer from "./Components/Home/Footer/Footer";
// import Login from "./Components/Login/login";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/Aboutus">
            <AboutUS></AboutUS>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
