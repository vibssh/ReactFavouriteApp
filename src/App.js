import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Provider } from "outstated";
import "./scss/App.scss";

import Store from "./store/store";

//Pages
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";

//Components
import Header from "./components/Header";
class App extends Component {
  render() {
    return (
      <>
        <Provider stores={[Store]}>
          <Header store={Store} />
          <section>
            <Switch>
              <Route exact path="/" render={() => <Home store={Store} />} />
              <Route
                exact
                path="/favourites"
                render={() => <Favourites store={Store} />}
              />
            </Switch>
          </section>
        </Provider>
      </>
    );
  }
}

export default App;
