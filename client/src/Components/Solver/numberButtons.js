import React from 'react';

class NumberButtons extends React.Component
{
    render() {
        return (
            <div>
                <button type="button" className="btn btn-warning" onClick={() => this.props.changeNumber("1")} style={{margin:"10px 0.43pc"}}>1</button>
                <button type="button" className="btn btn-warning" onClick={() => this.props.changeNumber("2")} style={{margin:"10px 0.43pc"}}>2</button>
                <button type="button" className="btn btn-warning" onClick={() => this.props.changeNumber("3")} style={{margin:"10px 0.43pc"}}>3</button>
                <button type="button" className="btn btn-warning" onClick={() => this.props.changeNumber("4")} style={{margin:"10px 0.43pc"}}>4</button>
                <button type="button" className="btn btn-warning" onClick={() => this.props.changeNumber("5")} style={{margin:"10px 0.43pc"}}>5</button>
                <button type="button" className="btn btn-warning" onClick={() => this.props.changeNumber("6")} style={{margin:"10px 0.43pc"}}>6</button>
                <button type="button" className="btn btn-warning" onClick={() => this.props.changeNumber("7")} style={{margin:"10px 0.43pc"}}>7</button>
                <button type="button" className="btn btn-warning" onClick={() => this.props.changeNumber("8")} style={{margin:"10px 0.43pc"}}>8</button>
                <button type="button" className="btn btn-warning" onClick={() => this.props.changeNumber("9")} style={{margin:"10px 0.43pc"}}>9</button>
                <button type="button" className="btn btn-warning" onClick={() => this.props.changeNumber(" ")} style={{margin:"10px 0.43pc"}}>C</button>
            </div>
        );
    }
}

export default NumberButtons;