import React, { Fragment } from "react";
import { Link } from "react-router-dom";

class PersonalData extends React.Component {
  fields = {
    firstName: React.createRef(),
    lastName: React.createRef(),
    companyName: React.createRef(),
    email: React.createRef()
  };

  handleChange = e => {
    const personalData = {
      firstName: this.fields.firstName.current.value,
      lastName: this.fields.lastName.current.value,
      companyName: this.fields.companyName.current.value,
      email: this.fields.email.current.value
    };

    this.props.updatePersonalData(personalData);
  };

  render() {
    return (
      <Fragment>
        <h3>Personal Data</h3>

        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="First Name"
            ref={this.fields.firstName}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Last Name"
            ref={this.fields.lastName}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Company Name"
            ref={this.fields.companyName}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Email"
            ref={this.fields.email}
            onChange={this.handleChange}
          />
        </div>

        <Link to="/2" className="btn-next btn btn-success">
          Next Step
        </Link>
      </Fragment>
    );
  }
}

export default PersonalData;
