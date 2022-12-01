import React from 'react';
import actors from './cards.json';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            topScore: 0,
            actors: actors.superheroes,
            
        }
    }
    clickActor=(e)=>{
        const id=e.target.parentElement.id;
        if(this.state.actors[id-1].clicked===false){
            this.setState({score:this.state.score+1})
            this.state.actors[id-1].clicked=true;
            if(this.state.score>=this.state.topScore){
                this.setState({topScore:this.state.score+1})
            }
        }else{
            this.setState({score:0})
            this.state.actors.map(actor=>{actor.clicked=false})
        }
        
    //random all actors
        let shuffled = this.state.actors
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
           
        this.setState({actors:shuffled});
    }
    render() {
        return (
            <>
                <nav style={{backgroundColor:'orange',color:'white'}}>
                    <h1>Superheroes Memory Game</h1>
                    <p>score:{this.state.score}</p>
                    <p>top score:{this.state.topScore}</p>
                </nav>
                <h2 style={{backgroundColor:'orangered',color:'white'}}>Get points by clicking on an image but don't click on any more than once!</h2>
                <div style={{ display:'flex',flexWrap:'wrap'}}>
                    {this.state.actors.map(actor => {
                        return (
                            <div key={actor.id} id={actor.id} onClick={this.clickActor} style={{border:'2px black solid',display:'inline-block' ,margin:'5px'}}>
                                <img src={actor.image} alt="actor" width='200px' height='200px'/>
                                <h3>{actor.name}</h3>
                                <h5>{actor.occupation}</h5>
                            </div>
                        )
                    })}
                </div>
            </>)
    }
}
export default Game;