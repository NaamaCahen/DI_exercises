import React from 'react';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            destination: '',
            nuts: false,
            lactose: false,
            vegan: false
        }
    }
    handleChange = (e) => {
        if (e.target.name === "vegan" || e.target.name === "nuts" || e.target.name === "lactose") {
            this.setState({ [e.target.name]: e.target.checked });
        } else {
            this.setState({ [e.target.name]: e.target.value });
        }
    }
    render() {
        return (
            <>
                <form style={{ display: 'flex', flexDirection: 'column' ,backgroundColor:'coral', width:'50vw'}}>
                    <h1>Sample form</h1>
                    <input name='firstName' placeholder='first name' type='text' onChange={this.handleChange} />
                    <input name='lastName' placeholder='last name' type='text' onChange={this.handleChange} />
                    <input name='age' placeholder='age' type='number' onChange={this.handleChange} />
                    <div><input type='radio' value='male' name='gender' onChange={this.handleChange} /> male</div>
                    <div><input type='radio' value='female' name='gender' onChange={this.handleChange} /> female</div>
                    <h3>Select your destination:</h3>
                    <select name='destination' onChange={this.handleChange}>
                        <option >--choose your destination--</option>
                        <option>tel aviv</option>
                        <option>basel</option>
                        <option>new york</option>
                        <option>baden baden</option>
                    </select>
                    <h3>Dietary restrictions:</h3>
                    <div><input type='checkbox' name="nuts" value='nuts' onChange={this.handleChange} />Nuts free</div>
                    <div><input type='checkbox' name="lactose" value='lactose' onChange={this.handleChange} />Lactose free</div>
                    <div><input type='checkbox' name="vegan" value='vegan' onChange={this.handleChange} />Vegan</div>
                </form>
                <div style={{backgroundColor:'lightblue',width:'50vw'}}>
                    <h1>Entered information:</h1>
                    <p>your name: {this.state.firstName} {this.state.lastName}</p>
                    <p>your age: {this.state.age}</p>
                    <p>your gender: {this.state.gender}</p>
                    <p>your destination: {this.state.destination}</p>
                    <p>your dietry restrictions: </p>
                    <p>**Nuts free: {(this.state.nuts===true)?'yes':"no"}</p>
                    <p>**Lactose free: {(this.state.lactose===true)?'yes':"no"}</p>
                    <p>**Vegan free: {(this.state.vegan===true)?'yes':"no"}</p>
                </div>
            </>)
    }
}
export default Form;