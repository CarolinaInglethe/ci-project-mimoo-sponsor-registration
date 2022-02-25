import React from 'react';
import Input from '../components/input';
import GreenButton from '../components/GreenButton';

function Login() {
  return (
      <div className="login-container">
        <h1>Login</h1>
        <form className="login-form-container">
          <Input />
          <Input />
          <GreenButton />
        </form>
      </div>
  )
}

export default Login;