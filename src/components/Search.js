import React, {Component} from 'react';
import API from '../utils/API';

class Search extends Component{
    state = {
        userInput: "",
        results: {}
    }
    handleInputChange = event => {
        // copy
        let name = event.target.name;
        let value = event.target.value;

        // modify

        // setState
        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        //copy
        let input = this.state.userInput;

        // modify

        // setState
        API.search(input)
        .then( results => {
            this.setState({ results: results.data });
        });
    }

    render(){
        return (
            <div className="container">
                <form
                onSubmit={this.handleSubmit}
                >
                <input 
                type="text" 
                name="userInput"
                onChange={this.handleInputChange} 
                value={this.state.userInput}/>
                <button type="submit" value="submit">Search</button>
                </form>
                <div>Search {this.props.match.params.query}</div>
                
                { typeof this.state.results.message !== 'undefined' ? this.state.results.message.map( src => {
                    return <div><img src={src} />   </div>
                }) : ""}
            </div>
            )
    }
    
}

export default Search;