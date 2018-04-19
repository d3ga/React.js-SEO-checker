import React from "react";

class Result extends React.Component {
  render() {
    const result = this.props.result;
    return (
      <div className="list-group">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{this.props.title}</h5>
        </div>
        <p className="mb-1">{result.message}</p>
      </div>
    );
  }
}

export default Result;
