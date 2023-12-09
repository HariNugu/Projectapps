import React, { Component } from 'react'

export class Day1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    Handler=()=>{
        this.setState({count:this.state.count+20})
    }
    Handle=()=>{
        this.setState({count:this.state.count+100})
    }
    Hand=()=>{
        this.setState({count:this.state.count-40})
    }
    Han=()=>{
        this.setState({count:this.state.count-70})
    }
    render() {
        return (
            <center>
            <div>
                <h1>hari:{this.state.count}</h1>
                <button onClick={this.Handler}>click20</button>
                <button onClick={this.Handle}>click100</button>
                <button onClick={this.Hand}>click-40</button>
                <button onClick={this.Han}>click-70</button>
            </div>
            </center>
        )
    }
}

export default Day1

