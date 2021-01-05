import React, { useState } from "react";
import UserPool from "../UserPool";

function SignUp() {
  //Usestate hooks to store the state of the user information
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = event => {
    event.preventDefault();

    //This is where we will call the
    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) console.error(err);
      console.log(data);
    });
  };

  return (
    <div className='App'>
      <form className='demoForm' onSubmit={onSubmit}>
        <h2>Sign up</h2>
        <div className='form-group'>
          <label htmlFor='email'>Email address</label>
          <input type='email' className='form-control' name='email' value={email} onChange={event => setEmail(event.target.value)} />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input type='password' className='form-control' name='password' value={password} onChange={event => setPassword(event.target.value)} />
        </div>
        <button type='submit' className='btn btn-primary'>
          Sign up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
