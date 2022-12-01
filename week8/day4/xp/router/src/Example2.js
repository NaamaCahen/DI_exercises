import React from "react";
import file from './ex3.json'

class Example2 extends React.Component{
    constructor(){
        super();
        this.state={
            programming:file.Skills[0],
            web:file.Skills[1]
        }
    }
    render(){
        return(
            <>
           <h3>{this.state.programming.Area}</h3>
           <ul>
                {this.state.programming.SkillSet.map((item)=>{
                    return (
                        <li>{item.Name}</li>
                    )
                })}
            </ul>
           <h3>{this.state.web.Area}</h3>
           <ul>
                {this.state.web.SkillSet.map((item)=>{
                    return (
                        <li>{item.Name}</li>
                    )
                })}
            </ul>
       </> )
    }
}
export default Example2;