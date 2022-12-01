import React from 'react';
import quotes from './quotes';
import './QuoteBox.css'


class QuoteBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentQuote:quotes[0].quote,
            currentAuthor:quotes[0].author,
            backgroundColor:'blue'
        }
    }
    newQuote=()=>{
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        this.setState({backgroundColor:randomColor});
        document.body.style.backgroundColor = "#" + this.state.backgroundColor;
        const quote = quotes[Math.floor(Math.random()*quotes.length)];
        while(quote.quote===this.state.currentQuote){
             quote = quotes[Math.floor(Math.random()*quotes.length)];
        }
        this.setState({currentQuote:quote.quote,currentAuthor:quote.author})
        
    }
  
  
    render(){
        return(
            <>
                <div className='box'>
                    <p>{this.state.currentQuote}</p>
                    <p>{this.state.currentAuthor}</p>
                    <button onClick={this.newQuote}>new quote</button>
                </div>
            </>
        )
    }
}
export default QuoteBox;