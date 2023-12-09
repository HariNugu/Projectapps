
import React, { Component } from 'react'

export class Day2 extends Component {
    constructor(props){
        super(props);

        this.state={
            name:"",
            PassWord:"",
            Email:"",
            data:[],
        };
    }
    updateName=(event)=>{
        this.setState({
            name: event.target.value,
        });
        //console.log("this is update name",event)
    };
    updatePassWord=(event)=>{
        this.setState({
            PassWord: event.target.value,
        });
        //console.log("this is update PassWord",event)
    };
     updateEmail=(event)=>{
        this.setState({
            Email: event.target.value,
        });
        //console.log("this is update Email",event)
    };
    updateData=()=>{
        this.setState({data:[...this.state.data,{Name:this.state.name,PassWord:this.state.PassWord,Email:this.state.Email}],name:"",PassWord:"",Email:"",});
    };
   
    render() {
        return (
            <center>
            <div>
                {/* {console.log("this is state",this.state.name)}
                {console.log("this is data",this.state.data)}
                {console.log("this is state",this.state.PassWord)}
                {console.log("this is data",this.state.data)}
                {console.log("this is state",this.state.Email)}
                {console.log("this is data",this.state.data)} */}
                {console.log("this is state",this.state)}
                <label>Name:</label>
                <input value={this.state.name}onChange={(e)=>this.updateName(e)} /><br />
                <label>PassWord:</label>
                <input value={this.state.PassWord}onChange={this.updatePassWord}type={"password"} /><br />
                <label>Email:</label>
                <input value={this.state.Email}onChange={(e)=>this.updateEmail(e)}type={"Email"} /><br />
                <br />
                <button onClick={this.updateData}>Submit</button>
                <div>
                    <ol>
                    {this.state.data.map((e,i)=>{
                        return (
                            <div key={i}>
                            <li>{e.Name}</li>
                            <li>{e.PassWord}</li>
                            <li>{e.Email}</li>
                        </div>
                        )
                    })}
                    </ol>
                    </div>               
            </div>
            </center>
        );
    }
}

export default Day2
