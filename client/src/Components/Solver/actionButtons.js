import React from 'react';

class ActionButtons extends React.Component
{
    render() {
        return (
            <div>
                <button type="button" className="btn btn-danger m-2" onClick={() => {this.props.clearGrid()}} style={{width:"9.35pc"}}>Clear Grid</button>
                <button type="button" className="btn btn-success m-2" onClick={() => {this.props.resetGrid()}} style={{width:"9.35pc"}}>Reset</button>
                <button type="button" className="btn btn-info m-2" onClick={() => {this.props.newRandomGrid()}} style={{width:"9.35pc"}}>New Grid</button><br/>
                <button type="button" className="btn btn-primary m-2" onClick={() => {this.props.validateThenSolve()}} style={{width:"30pc"}}>Solve</button>
            </div>
        );
    }
}

export default ActionButtons;