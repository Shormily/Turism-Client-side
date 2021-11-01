import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Home/Header/Header";
import Home from "./Components/Home/Home";
import AboutUS from "./Components/Home/AboutUS/AboutUS";
import Services from "./Components/Home/Services/Services";
import Footer from "./Components/Home/Footer/Footer";
// import Login from "./Components/Login/login";
import Login from "./Components/Login/Login";
import AuthProvider from "./Components/contexts/AuthProvider";
import SingleService from "./Components/SingleService/SingleService";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ManageAllOrder from "./Components/ManageAllOrders/ManageAllOrder";
import MyOrders from "./Components/MyOrders/MyOrders";
import UpdateStatus from "./Components/ManageAllOrders/UpdateStatus/UpdateStatus";
// import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

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
            <Route exact path="/Aboutus">
              <AboutUS></AboutUS>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute exact path="/services/:id">
              <SingleService></SingleService>
            </PrivateRoute>
            <PrivateRoute exact path="/manageAllOrders">
              <ManageAllOrder></ManageAllOrder>
            </PrivateRoute>
            <PrivateRoute exact path="/update/:id">
              <UpdateStatus></UpdateStatus>
            </PrivateRoute>
            <PrivateRoute exact path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
