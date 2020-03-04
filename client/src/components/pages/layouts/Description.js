import React, { Fragment } from 'react';

const Description = (props) => {
    return (
        <Fragment>
            <h1 className="page-intro">Welcome</h1>
            <div className="row">
                <div className="col-lg-8 col-sm-12">
                <p>Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt. Donec sollicitudin molestie malesuada.</p>
                </div>
            </div>
            <p className="bold">New Here?</p>
            <a href="#" className="btn btn-primary">Sign Up</a>
        </Fragment>
    );
}

export default Description;