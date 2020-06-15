class Support extends Component{

    state = {
        support: 0,
    }
      
    handleChange=(event)=>{
        console.log('In handleChange', this.state);
        this.setState({
            ...this.state, 
            support: event.target.value,
        })
    }

    handleSubmit=()=>{
        console.log('In handleSubmit');
        if (this.state.support !== ''){
        const action= {type: 'ADD_SUPPORT', payload: this.state.support} ;
        this.props.dispatch(action);
        this.props.history.push('/comments');
    } else {
        alert('Please Select an option');
    }
    }


    
    render(){
        return(
            <section>
                <h2>How Well Do You Feel Supported Today?</h2>
                <p>In A Scale From 1 - 5</p>
                <form onSubmit={this.handleSubmit}>
                <input type="number" name="support" min="1" max="5" onChange={this.handleChange} />
                <button type="submit">Next</button>
                </form>
            <div>
                <Feedback />
            </div>
            </section>
        );
    }
}

export default connect() (Support);