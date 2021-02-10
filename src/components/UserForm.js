import React, { Component } from 'react'
import FormUserDetails from "./FormUserDetails"
import FormPersonalDetails from "./FormPersonalDetails"
import Success from "./Success"
class UserForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            step: 1,
            firstName: "",
            lastName: "",
            email: "",
            occupation: "",
            city: "",
            // bio: "",
            maritial_status: "",
            village: "",
            po: "",
            district: ""
        }
        // this.handleChange = this.handleChange.bind(this)
    }
    ///**proceed to next step */
    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 })
    }
    ////**go back to prev step */
    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 })
    }
    /////**handle field change */
    handleChange = e => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({ [name]: value });

    }
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {

        const { step } = this.state
        switch (step) {
            case 1:
                return (
                    <FormUserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={this.state.value}
                        onSubmit={this.handleSubmit}
                        nextStep={this.nextStep}

                    />
                )
            case 2:
                return (
                    <FormPersonalDetails
                        handleChange={this.handleChange}
                        values={this.state.value}
                        onSubmit={this.handleSubmit}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                    />
                )
            case 3:
                return (
                    <Success
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                    />
                )
            case 4:
                return <h1>success</h1>
        }

    }

}

export default UserForm
