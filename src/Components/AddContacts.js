import React from "react";
import ReactDOM from "react-dom/client";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class AddContacts extends React.Component {
    state = {
        name:"",
        email:"",
    };
    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("all the fields are mandatory");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"", email:""});
    }
  render() {
    return (
      <div className="container">
        <Form onSubmit={this.add}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Enter Name" value={this.state.name} onChange={(e) => this.setState({name:e.target.value})}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" value={this.state.email} onChange={(e) => this.setState({email:e.target.value})}/>
          </Form.Group>
          <Button as="input" type="submit" value="Add" />
        </Form>
      </div>
    );
  }
}

export default AddContacts;
