import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home/Home";
import Footer from "./components/Footer";
import Form from "./components/pages/SignUp/Form";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sign-up" component={Form} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
