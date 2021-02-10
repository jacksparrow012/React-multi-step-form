import React from 'react';
import { Button } from "reactstrap"

const Confirmation = () => {
    return (
        <div className="container">
            <h2>Success!</h2>
            <h5>Your Form submitted successfully, we will contact with you as soon as possible.</h5>
            <p>Thank you, stay with us</p>
            <Button className="btn btn-lg btn-success btn-block">Close</Button>
        </div>
    );
};

export default Confirmation;