import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const HomePage = (props) => {
    return (
        <div>
            <Jumbotron>
                <h1 className="bg-info clearfix" color="primary">Welcome to our contact manager!</h1>
                <p className="lead">A contact manager is a software program that enables users to easily store contact information, such as names, email and mobile numbers.</p>
                <hr className="my-2" />
                <p className="lead">
                    <Button color="primary">Learn More</Button>
                </p>
            </Jumbotron>
        </div>
    );
};

export default HomePage;