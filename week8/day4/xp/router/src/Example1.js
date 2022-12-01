import React from "react";
import file from './ex3.json'

class Example1 extends React.Component{
    constructor(){
        super();
        this.state={
            medias:file.SocialMedias
        }
    }
    render(){
        return(
            <ul>
                {this.state.medias.map((item,i)=>{
                    return (
                        <li>{item}</li>
                    )
                })}
            </ul>
        )
    }
}
export default Example1;