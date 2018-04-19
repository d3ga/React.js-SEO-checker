import React, { Fragment } from "react";
import { Link } from "react-router-dom";

class WebsiteData extends React.Component {
  fields = {
    url: React.createRef(),
    keywords: React.createRef()
  };

  handleChange = e => {
    let keywords = this.fields.keywords.current.value
      .split(",")
      .map(keyword => keyword.trim());

    const websiteData = {
      url: this.fields.url.current.value,
      keywords
    };

    this.props.updateWebsiteData(websiteData);
  };

  render() {
    return (
      <Fragment>
        <h3>Website Data</h3>

        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="URL"
            ref={this.fields.url}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="keywords"
            ref={this.fields.keywords}
            onChange={this.handleChange}
          />
        </div>

        <Link to="/3" className="btn-next btn btn-success">
          Next Step
        </Link>
      </Fragment>
    );
  }
}
export default WebsiteData;
