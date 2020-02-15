import React from 'react';
import Steps from './steps';
import text from './text';

class About extends React.Component
{
    render() {
        return (
            <div className="row justify-content-center" style={pageStyle}>
                <div className="col-md-6">
                    <h2 style={titleStyle}>About the Sudoku Solver</h2>
                    <p style={introStyle}>{text[0]}</p>
                    <Steps />
                </div>
            </div>
        )
    }
}

const pageStyle = {
    textAlign: "justify", 
    color: "#444b52"
}

const titleStyle = {
    margin: "50px 0"
}

const introStyle = {
    marginBottom: "50px"
}

export default About;