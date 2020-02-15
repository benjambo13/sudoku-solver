import React from 'react';
import Sudoku from './sudoku';
import NumberButtons from './numberButtons'
import ActionButtons from './actionButtons'
import axios from 'axios';

class Index extends React.Component
{
    constructor(props) {
        super(props);
        this.state = { 
            response: "" ,
            sudoku: firstGrid,
            selected: 0,
            resetState: firstGrid,
        };
    }

    validateThenSolve = () => {
        axios.post("http://localhost:9000/api/validate", {grid: this.state.sudoku})
            .then(res => {
                if (res.data)
                    this.solveOnServer();
                else
                    this.setState({response: "Invalid Grid"})
            });
    }

    newRandomGrid = () => {
        axios.get("http://localhost:9000/api/random")
            .then(res => {
                this.setState({sudoku: res.data})
                this.setState({resetState: res.data})
            });
        
    }
    
    solveOnServer = () => {
        this.setState({response: "Loading..."})
        this.setState({resetState: this.state.sudoku})
        axios.post("http://localhost:9000/api/solver", {grid: this.state.sudoku})
            .then(res => {
                this.setState({sudoku: res.data[0]})
                this.setMessage(res.data[1])
            });
    }

    setMessage = (errorNum) => {
        if (errorNum === 0)
            this.setState({response: "Solution Found!"})
        else
            this.setState({response: "Could not find solution. Number of errors: " + errorNum})
    }

    setSelected = (newSelected) => {
        document.getElementById("i" + this.state.selected).setAttribute("style", "background-color: none")
        this.setState({selected: newSelected})
        document.getElementById("i" + newSelected).setAttribute("style", "background-color: #dee2e6")
    }

    changeNumber = (number) => {
        var newSudoku = [...this.state.sudoku]
        newSudoku[this.state.selected] = number
        this.setState({sudoku: newSudoku})
    }

    clearGrid = () => {
        var newSudoku = [...this.state.sudoku].map(elem => " ")
        this.setState({sudoku: newSudoku})
    }

    resetGrid = () => {
        this.setState({sudoku: this.state.resetState})
    }

    componentDidMount = () => {
        document.getElementById("i" + this.state.selected).setAttribute("style", "background-color: #dee2e6")
    }

    render()
    {
        return (
            <div className="col-md-12 justify-content-md-center" style={{textAlign: "center"}}>
                <Sudoku sudoku={this.state.sudoku} selected={this.state.selected} setSelected={this.setSelected}/>
                <NumberButtons changeNumber={this.changeNumber}/>
                <ActionButtons 
                    validateThenSolve={this.validateThenSolve} 
                    clearGrid={this.clearGrid} 
                    newRandomGrid={this.newRandomGrid}
                    resetGrid={this.resetGrid}
                />
                {this.state.response === "Loading..." ? <div className="spinner-border text-primary m-2" role="status" /> : <div>{this.state.response}</div>}
            </div>
        );
    }
}

const firstGrid = [
    ' ',' ',' ',' ',' ',' ',' ',' ',' ',
    ' ',' ',' ',' ',' ',' ',' ',' ',' ',
    ' ',' ',' ',' ',' ',' ',' ',' ',' ',
    ' ',' ',' ',' ',' ',' ',' ',' ',' ',
    ' ',' ',' ',' ',' ',' ',' ',' ',' ',
    ' ',' ',' ',' ',' ',' ',' ',' ',' ',
    ' ',' ',' ',' ',' ',' ',' ',' ',' ',
    ' ',' ',' ',' ',' ',' ',' ',' ',' ',
    ' ',' ',' ',' ',' ',' ',' ',' ',' ',
]


export default Index;