import React , { Component}from 'react';
import { Form, Button, Input, Navbar, Label } from "reactstrap"
class FormUserDetails extends Component {
         continue=(e)=>{
        e.preventDefault();
        this.props.nextStep()
    }
render() {
    const {values,handleChange,onSubmit}=this.props
    return (
        <div className="container">
            <Navbar className="bg-dark d-flex justify-content-center text-white" color="dark" fixed="top"><h3>Enter Below Information</h3></Navbar>
            <br />
            <br />
            <Form onSubmit={onSubmit} className="myForm" style={{ marginTop: "50px" }}>
                <Input
                    type="text"
                    placeholder="Your First Name"
                    value={values}
                    onChange={handleChange}
                    name="firstName"
                />
                <br />
                <Input
                    type="text"
                    placeholder="Your Last Name"
                    value={values}
                    onChange={handleChange}
                    name="lastName"
                />
                <br />
                <Input
                    type="text"
                    placeholder="email"
                    value={values}
                    onChange={handleChange}
                    name="email"
                />
                <br />

                <Button 
                       className="btn btn-block btn-lg btn-success"
                       onClick={this.continue}>
                       Continue
                
                </Button>
            </Form>
        </div>
    )

}

};

export default FormUserDetails;