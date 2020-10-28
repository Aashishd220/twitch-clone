import React from 'react'
import '../style/GoogleAuth.css'
import {connect} from 'react-redux';
import {signIn,signOut} from '../actions'


class GoogleAuth extends React.Component{
   
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'482476361660-7bkn700s0fkvcnsp5r1mj8tva9rojimg.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth=window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }
    onAuthChange=(isSignedIn)=>{
        // this.setState({isSignedIn:this.auth.isSignedIn.get()})
        if(isSignedIn){
            this.props.signOut();
        }
        else{
            this.props.signIn();
        }
    }

    toggleLogin=()=>{
        {this.props.isSignedIn?this.props.signOut(this.auth.currentUser.get().getId()):this.props.signIn(this.auth.currentUser.get().getId())};
    }

    googleButton(){
        return(
            <button className="googleButton" onClick={this.toggleLogin}>
                 <i className="fa fa-google" ></i>
        <div className="text"> {this.props.isSignedIn?"Sign Out":"Sign In"}</div>

            </button>
        )
    }
    renderbutton(){
        if(this.props.isSignedIn===null){
            return null;
        }
        else if(this.props.isSignedIn){
            return this.googleButton();
        }
        else{
            return this.googleButton();
        }
    }
    render(){
        console.log(this.props.isSignedIn);
        return (
            <div>
                {this.renderbutton()}
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {isSignedIn:state.auth.isSignedIn}
}
export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth)
