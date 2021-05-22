import React, { Component } from "react";
import "./bstyles.css";

class BugReport extends Component {
  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
    event.preventDefault();
  };

  render() {
    return (
      <div style={{padding:"20%"}}>
      <center>
        <label>
          <h1>Bug Reporting Window</h1>
        </label>
      </center>
      <form style = {{padding:"5%"}}>
        <div className="form-group">
          <label for="exampleFormControlInput1">Bug</label>
          <input type="text" class="form-control" />
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Bug Description</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <center>
        <button type="submit" class="btn btn-danger" style = {{height:"70px", width:"150px"}}>
          <h3 style={{alignItems: "center", paddingTop: "10%"}}>Submit</h3>
        </button>
        </center>
      </form>

      
      </div>
    );
  }
}

export default BugReport;
