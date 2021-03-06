import React from "react";
import './MyForm.css';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (

        <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/mdopbkpa"
        method="POST"
        >
        <div className="flexform">
        <label className="email">Email:</label>
        <div className="flexx">
        <input type="text" className="email" />
        </div>
        <label className="messagebox">Message:</label>
        <div className="flexx">
        <input type="textarea" className="message" />
        </div>
        <div className="flexx">
        {status === "SUCCESS" ? <p>Thanks!</p> : <button className="form-button">Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </div>
        </div>
        </form> 
     
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

