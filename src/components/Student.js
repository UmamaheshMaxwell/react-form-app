import React, { Component } from "react";
import InputType from "./InputText";
import Checkbox from "./Checkbox";

class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      gender: "male",
      city: "",
      isReact: false,
      isAngular: false,
      isVue: false
    };
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onGenderChange = e => {
    this.setState({ gender: e.target.value });
  };

  onCityChange = e => {
    this.setState({ city: e.target.value });
  };

  onSubmit = e => {
    console.log(this.state);
    e.preventDefault();
  };

  onReactChange = e => {
    this.setState({ isReact: !this.state.isReact });
  };
  onAngularChange = e => {
    this.setState({ isAngular: !this.state.isAngular });
  };
  onVueChange = e => {
    this.setState({ isVue: !this.state.isVue });
  };

  render() {
    const {
      firstname,
      lastname,
      email,
      phone,
      gender,
      city,
      isAngular,
      isReact,
      isVue
    } = this.state;
    const marginRight = { marginRight: "15px" };
    return (
      <div className="container">
        <h2>Student Form</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>FirstName</label>
            <InputType
              name="firstname"
              value={firstname}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <label>LastName</label>
            <InputType
              name="lastname"
              value={lastname}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <InputType
              name="email"
              value={email}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <InputType
              name="phone"
              value={phone}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <label className="radio-inline control-label">Gender</label>
            <br />
            Male &nbsp;&nbsp;
            <input
              type="radio"
              value="male"
              name="male"
              checked={gender === "male"}
              onChange={this.onGenderChange}
            />
            &nbsp;&nbsp;Female&nbsp;&nbsp;
            <input
              type="radio"
              value="female"
              name="female"
              checked={gender === "female"}
              onChange={this.onGenderChange}
            />
          </div>
          <div className="form-group">
            <label>City</label>
            <select
              className="form-control"
              value={city}
              onChange={this.onCityChange}
            >
              <option value="bangalore">Bangalore</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="Sydney">Sydeny</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="">Technologies</label> <br />
            ReactJS
            <Checkbox
              style={marginRight}
              value={isReact}
              onChange={this.onReactChange}
            />
            AngularJS
            <Checkbox
              style={marginRight}
              value={isAngular}
              onChange={this.onAngularChange}
            />
            VueJS
            <Checkbox
              style={marginRight}
              value={isVue}
              onChange={this.onVueChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Student;
