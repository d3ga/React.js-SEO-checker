import React from "react";
import Result from "./Result";
import OnPageCheck from "../../modules/OnPageCheck";
import Axios from "axios";
import jsPDF from "jspdf";

class Results extends React.Component {
  state = {
    loading: true,
    results: {}
  };

  async componentDidMount() {
    const website = this.props.url;
    // const website = "https://kostasdegaitas.de/";

    const proxiedWebsite = `http://cors-proxy.htmldriven.com/?url=${website}`;

    let response = "";

    try {
      response = await Axios.get(proxiedWebsite);
    } catch (error) {
      console.error(error);
    }
    console.log(response);
    console.log(OnPageCheck(response.data.body));

    this.setState(state => {
      state.loading = false;
      state.results = OnPageCheck(response.data.body);
      return state;
    });
  }

  savePdf = e => {
    e.preventDefault();

    const pdf = new jsPDF({
      orientation: "p",
      unit: "mm",
      format: "a4"
    });

    const source = document.querySelector(".form-group");

    pdf.fromHTML(source, 15, 15);

    pdf.save("PageCheckReport.pdf");
  };

  render() {
    return (
      <div className="form-group">
        <h3 className="text-center">Results for</h3>
        <p className="text-center font-weight-bold">{this.props.url}</p>

        {this.state.loading === false && (
          <div>
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
          </div>
        )}
      </div>
    );
  }
}
export default Results;
