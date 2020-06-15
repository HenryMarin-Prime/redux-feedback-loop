import React, {Component} from 'react';
import {connect} from 'react-redux';
import Review from '../Review/Review';

class Understanding extends Component{

    state = {
        understanding: 0,
    }
      
    handleChange=(event)=>{
        console.log('In handleChange', this.state);
        this.setState({
            ...this.state, 
            understanding: event.target.value,
        })
    }

    handleSubmit=()=>{
        console.log('In handleSubmit');
        if (this.state.understanding !== ''){
        const action= {type: 'ADD_UNDERSTANDING', payload: this.state.understanding} ;
        this.props.dispatch(action);
        this.props.history.push('/support');
    } else {
        alert('Please Select an option');
    }
    }


    
    render(){
        return(
            <section>
                <h2>How Well Did you Understand The Material Today?</h2>
                <p>In A Scale From 1 - 5</p>
                <form onSubmit={this.handleSubmit}>
                <input type="number" name="understanding" min="1" max="5" onChange={this.handleChange} />
                <button type="submit">Next</button>
                </form>
            <div>
                <Review />
            </div>
            </section>
        );
    }
}

export default connect() (Understanding);