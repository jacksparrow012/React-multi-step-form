import React , { Component}from 'react';
import { Form, Button, Input, Navbar } from "reactstrap"
class FormUserDetails extends Component {
         continue=(e)=>{
        e.preventDefault();
        this.props.nextStep()
    }
    back=(e)=>{
        e.preventDefault();
        this.props.prevStep()
    }
render() {
    const {values,handleChange,onSubmit}=this.props
    return (
        <div className="container">
            <Navbar className="bg-dark d-flex justify-content-center text-white" color="dark" fixed="top"><h3>Enter Your Full Biodata</h3></Navbar>
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
                <Input
                    type="text"
                    placeholder="Your profession"
                    value={values}
                    onChange={handleChange}
                    name="occupation"
                />
                <br />
                <Input
                    type="text"
                    placeholder="Maritial status"
                    value={values}
                    onChange={handleChange}
                    name="maritial_status"
                />
                <br />

                <Input
                    type="text"
                    placeholder="Enter Your city name"
                    value={values}
                    onChange={handleChange}
                    name="city"
                />
                <br />
             
                <Input
                    type="text"
                    placeholder="village"
                    value={values}
                    onChange={handleChange}
                    name="village"
                />
                <br />
                <Input
                    type="text"
                    placeholder="Your police station"
                    value={values}
                    onChange={handleChange}
                    name="po"
                />
                <br />

                <Input
                    type="text"
                    placeholder="Your Home District"
                    value={values}
                    onChange={handleChange}
                    name="district"
                />
                <br />
                <Button 
                       className="btn btn-lg btn-info"
                       onClick={this.continue}
                       style={{marginRight:"5px"}}>
                       Continue
                
                </Button>
                <Button 
                       className="btn btn-lg btn-secondary"
                       onClick={this.back}>
                       Back
                
                </Button>
             </Form>
        </div>
    )

}

};

export default FormUserDetails;