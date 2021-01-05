import React, { useState } from "react";
import UserPool from "../UserPool";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";

function App() {
  //Hooks to store the state of the user information
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = event => {
    event.preventDefault();

    // Create new cognito users
    const user = new CognitoUser({
      Username: email,
      Pool: UserPool
    });

    //Auth details
    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password
    });

    //Call the function which takes in two arguements: authdetails, callback
    user.authenticateUser(authDetails, {
      onSuccess: data => {
        console.log("onSuccess:", data);
      },
      onFailure: err => {
        console.error("onFailure:", err);
      },

      newPasswordRequired: data => {
        console.log("newPasswordRequired:", data);
      }
    });
  };

  return (
    <div className='App'>
      <form className='demoForm' onSubmit={onSubmit}>
        <h2>Sign In</h2>
        <div className='form-group'>
          <label htmlFor='email'>Email address</label>
          <input type='email' className='form-control' name='email' value={email} onChange={event => setEmail(event.target.value)} />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input type='password' className='form-control' name='password' value={password} onChange={event => setPassword(event.target.value)} />
        </div>
        <button type='submit' className='btn btn-primary'>
          Sign In
        </button>
      </form>
    </div>
  );
}

export default App;
