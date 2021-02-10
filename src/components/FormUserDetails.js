import React from 'react';
import { Form, Button, Input, Navbar, Label } from "reactstrap"
const formUserDetails = (props) => {
    return (
        <div className="container">
            <Navbar className="bg-dark d-flex justify-content-center text-white" color="dark" fixed="top"><h3>Enter Below Information</h3></Navbar>
            <br />
            <br />
            <Form onSubmit={props.onSubmit} className="myForm" style={{ marginTop: "50px" }}>
                <Input
                    type="text"
                    placeholder="Your First Name"
                    value={props.values}
                    onChange={props.handleChange}
                    name="firstName"
                />
                <br />
                <Input
                    type="text"
                    placeholder="Your Last Name"
                    value={props.values}
                    onChange={props.handleChange}
                    name="lastName"
                />
                <br />
                <Input
                    type="text"
                    placeholder="email"
                    value={props.values}
                    onChange={props.handleChange}
                    name="email"
                />
                <br />

                <Button className="btn btn-block btn-lg btn-success">Continue</Button>
            </Form>
        </div>
    )


};

export default formUserDetails;