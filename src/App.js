import React, {Fragment} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <div>
        
        <Route exact path="/" 
          render={(props) => (
          <Fragment>
            <NavTabs {...props} />
            <Home {...props} /> 
          </Fragment>)
          } 
        />
        <Route exact path="/about" 
          render={(props) => (
            <Fragment>
              <NavTabs {...props} />
              <About {...props} /> 
            </Fragment>)
            } 
          />

        <Route exact path="/blog" 
          render={(props) => (
            <Fragment>
              <NavTabs {...props} />
              <Blog {...props} /> 
            </Fragment>)
            } 
        />
        <Route 
          path="/contact" 
          render={(props) => (
          <Fragment>
            <NavTabs {...props} />
            <Contact {...props} /> 
          </Fragment>)
          } 
        />
      </div>
    </Router>
  );
}

export default App;
