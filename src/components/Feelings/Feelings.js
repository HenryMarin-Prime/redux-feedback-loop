class Feeling extends Component{

    state = {
        feeling: 0,
    }
      
    handleChange=(event)=>{
        console.log('In handleChange', this.state);
        this.setState({
            ...this.state, 
            feeling: event.target.value,
        })
    }

    handleSubmit=()=>{
        console.log('In handleSubmit');
        if (this.state.feeling !== ''){
        const action= {type: 'ADD_FEELING', payload: this.state.feeling} ;
        this.props.dispatch(action);
        this.props.history.push('/understanding');
    } else {
        alert('Please Select an option');
    }
    }
    
    render(){
        return(
            <section>
                <h2>How Are You Feeling Today?</h2>
                <p>In A Scale From 1 - 5</p>
                <form onSubmit={this.handleSubmit}>
                <input type="number" name="feeling" min="1" max="5" onChange={this.handleChange} />
                <button type="submit">Next</button>
                </form>
            <div>
                <Feedback />
            </div>
            </section>
        );
    }
}

export default connect() (Feeling);