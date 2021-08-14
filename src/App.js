import React , {Component} from "react";
import Login from './Components/Login/Login';
import axios from 'axios';
import Khareedar from "./Containers/Khareedar/Khareedar";
import Header from './Components/Header/Header';
import { Redirect , Route , BrowserRouter} from "react-router-dom";

import './App.css';


class App extends Component {
  state={
    authData: {
      email: '',
      password: '',
      returnSecureToken: true
    },
    token: '',
    userId: '',
    error: ''
  };

  onEmailChange = (event) => {
    this.setState({...this.state,
      authData: {...this.state.authData,
      email: event.target.value},
  });
  }

  onPasswordChange = (event) => {
   this.setState({...this.state,
      authData: {...this.state.authData,
      password: event.target.value},
  });
  }

  setCredentials = (token , userId) => {
    this.setState({token : token , userId : userId})
  }

  onSubmitHandlerSignup = ()=>{
    let formData = this.state.authData;
    axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA2BrtzHBmTHiKz43VyjqkB4wTlblqRJRY' , formData)
          .then((response) => {
            window.localStorage.setItem('token' , response.data.idToken)
            window.localStorage.setItem('userId' , response.data.localId)
            window.localStorage.setItem('isAuth' , true)
            this.setCredentials(response.data.idToken , response.data.localId)
          })
          .catch((err) => {
            this.setState({error : err.response.data.error.message})
          })

  }

  onSubmitHandlerSignin = () => {
    let formData = this.state.authData;
    axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA2BrtzHBmTHiKz43VyjqkB4wTlblqRJRY',formData)
    .then((response) => {
        window.localStorage.setItem('token' , response.data.idToken)
        window.localStorage.setItem('userId' , response.data.localId)
        window.localStorage.setItem('isAuth' , true)
       this.setCredentials(response.data.idToken , response.data.localId)
    })
    .catch((err) => {
            this.setState({error : err.response.data.error.message})
          })
    }

  render(){
    let isAuthenticated =  window.localStorage.getItem('isAuth');
    const loadedPage = (
          isAuthenticated? <Redirect to="/khareedar"/> : <Redirect to="/"/>
          
    );
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Route path="/" exact>
            <Login
            onEmailChange={this.onEmailChange}
            onPasswordChange={this.onPasswordChange}
            onSubmitHandlerSignin={this.onSubmitHandlerSignin}
            onSubmitHandlerSignup={this.onSubmitHandlerSignup}
            error={this.state.error}/>
        </Route>
        <Route path="/khareedar">
            <Khareedar/>
        </Route>
        {loadedPage}
      </div>
    </BrowserRouter>

  );
}
}

export default App;
