import React from "react";
import { Switch, Route } from "react-router-dom";
import Media from "react-media";

import HeaderNav from "./component/HeaderNav";
import IndexPage from "./pages/IndexPage";
import Footer from "./component/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DevProj from "./pages/DevProj";

const App = () => {
        return (
          <Media
          queries={{
            small: "(max-width: 599px)",
            medium: "(min-width: 600px) and (max-width: 1199px)",
            large: "(min-width: 1200px)"
          }}
        >
          {(matches) => {
            return (
              <>
                <HeaderNav />
                <Switch>
                  <Route path="/" exact component={IndexPage} />
                  <Route path="/about" component={About} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/devproj" component={DevProj} /> 
                </Switch>
                <Footer />
              </>
            );
          }}
        </Media>
      );
    };


export default App;