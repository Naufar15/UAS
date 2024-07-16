import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Artikel from "./pages/Artikel";
import Berita from "./pages/Berita";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Edukasi from "./pages/Edukasi";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/artikel" component={Artikel} />
          <Route path="/berita" component={Berita} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/edukasi" component={Edukasi} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
