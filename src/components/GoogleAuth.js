import React from 'react'
import '../style/GoogleAuth.css'


class GoogleAuth extends React.Component{
    state={isSignedIn:null};
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'482476361660-7bkn700s0fkvcnsp5r1mj8tva9rojimg.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth=window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn:this.auth.isSignedIn.get()})
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }
    onAuthChange=()=>{
        this.setState({isSignedIn:this.auth.isSignedIn.get()})
    }

    toggleLogin=()=>{
        {this.state.isSignedIn?this.auth.signOut():this.auth.signIn()};
    }

    googleButton(){
        return(
            <button className="googleButton" onClick={this.toggleLogin}>
                 <i class="fa fa-google" ></i>
        <div className="text"> {this.state.isSignedIn?"Sign Out":"Sign In"}</div>

            </button>
        )
    }
    renderbutton(){
        if(this.state.isSignedIn===null){
            return null;
        }
        else if(this.state.isSignedIn){
            return this.googleButton();
        }
        else{
            return this.googleButton();
        }
    }
    render(){
        
        return (
            <div>
                {this.renderbutton()}
            </div>
        )
    }
}

export default GoogleAuth
