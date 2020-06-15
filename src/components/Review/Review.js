import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';


class Review extends Component{

    showSubmitButton = () => {
        let feedback = this.props.reduxState.feedbackReducer;
        if( feedback.comments !== '' ){
            return <button onClick={this.handleSubmit}>Submit Feedback</button>;
        } else {
            return <button>Not Complete</button>;
        }
    } 

    handleSubmit = () => {
        const feedback = this.props.reduxState.feedbackReducer;
        this.props.submitFeedback( feedback );
        this.props.history.push( '/complete' );
    }



    render(){
        return(
           <section>
               <h2>This Is Your Feedback</h2>
                <p>Feeling: {this.props.reduxState.feedbackReducer.feeling}</p>
                <p>Understanding: {this.props.reduxState.feedbackReducer.understanding}</p>
                <p>Support: {this.props.reduxState.feedbackReducer.support}</p>
                <p>Comments: {this.props.reduxState.feedbackReducer.comments}</p>
                {this.showSubmitButton()}
           </section>
        );
    }
}
const reduxStateProps = (reduxState)=>({
    reduxState,
});

export default connect(reduxStateProps)(withRouter(Review));