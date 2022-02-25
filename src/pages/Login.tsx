import React from 'react';
import Input from '../components/input';
import GreenButton from '../components/GreenButton';

function Login() {
  return (
      <div className="login-container">
        <div className="login-text-container">
          <h1>1º programa de lealdade do Brasil</h1>
          <p>Baseado na empatia, gratidão e sustentabilidade</p>
        </div>
       
        <form className="login-form-container">
          <h2>Mimoo</h2>
          <Input 
            inputplaceholder="Email"
            name="email"
            type="text"
          />
          <Input
            inputplaceholder="Senha"
            name="password"
            type="password"
          />
          <GreenButton />
        </form>
      </div>
  )
}

export default Login;