import React, { Fragment } from "react";
import Result from "./Result";
import OnPageCheck from "../../modules/OnPageCheck";
import Axios from "axios";

class Results extends React.Component {
  state = {
    loading: true,
    results: {}
  };

  async componentDidMount() {
    const website = this.props.url;
    const proxiedWebsite = `http://cors-proxy.htmldriven.com/?url=${website}`;

    let response = "";

    try {
      response = await Axios.get(proxiedWebsite);
    } catch (error) {
      console.error(error);
    }

    // console.log(OnPageCheck(response.data.body));

    this.setState(state => {
      state.loading = false;
      state.results = OnPageCheck(response.data.body);
      return state;
    });
  }

  savePdf = () => {
    console.log("State", this.state);
  };

  render() {
    return (
      <Fragment>
        <h3>Results</h3>

        {this.state.loading === false && (
          <Fragment>
            <Result
              title="Meta Description"
              result={this.state.results.meta.description}
            />
            <Result title="Title" result={this.state.results.title} />

            <button
              type="button"
              className="btn-save btn btn-success"
              onClick={this.savePdf}
            >
              Save PDF
            </button>
          </Fragment>
        )}
      </Fragment>
    );
  }
}
export default Results;
