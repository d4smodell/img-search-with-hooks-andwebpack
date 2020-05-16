import React from "react";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { SearchState } from "./context/searchState";

export const App = () => {
  return (
    <SearchState>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/about" render={() => <About />} />
          </Switch>
        </div>
      </BrowserRouter>
    </SearchState>
  );
};
