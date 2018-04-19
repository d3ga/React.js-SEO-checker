import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import PersonalData from "./steps/PersonalData";
import WebsiteData from "./steps/WebsiteData";
import Results from "./steps/Results";

class App extends React.Component {
  state = {
    userData: {},
    website: {}
  };

  updatePersonalData = data => {
    this.setState(state => {
      state.userData = data;
      return state;
    });
  };

  updateWebsiteData = data => {
    this.setState(state => {
      state.website = data;
      return state;
    });
  };

  render() {
    return (
      <div className="dashboard container border mx-auto">
        <Header />

        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <PersonalData updatePersonalData={this.updatePersonalData} />
              )}
            />
            <Route
              path="/2"
              render={() => (
                <WebsiteData updateWebsiteData={this.updateWebsiteData} />
              )}
            />
            <Route
              path="/3"
              render={() => <Results url={this.state.website.url} />}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
