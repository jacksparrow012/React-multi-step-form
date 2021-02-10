import React, { Component } from 'react'
import { Button, Card } from "reactstrap"
import Modals from "./Modal"

class Success extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        return (
            <div className="container">
                <Card style={{ marginTop: "30px" }}>
                    <h5>Do you agree?</h5>
                    <p>May we will contact with you if require.</p>
                    <Button className="btn btn-lg btn-warning"
                        onClick={this.continue}
                    >
                        Continue</Button>
                    <br />
                    <Button className="btn btn-lg btn-secondary"
                        onClick={this.back}>
                        Back</Button>

                </Card>
            </div>
        )
    }
}
export default Success