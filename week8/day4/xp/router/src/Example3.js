import React from "react";
import file from './ex3.json'

class Example3 extends React.Component{
    constructor(){
        super();
        this.state={
            experiences:file.Experiences
        }
    }
    render(){
        return(
            <>
                {this.state.experiences.map((item,i)=>{
                    return (
                        <>
                        <img src={item.url} alt='user' />
                        <a href="#">{item.companyName}</a>
                        <h4>{item.roles[0].title}</h4>
                        <p>{item.roles[0].startDate} {item.roles[0].location}</p>
                        <p>{item.roles[0].description}</p>
                        </>
                    )
                })}
            </>
        )
    }
}
export default Example3;