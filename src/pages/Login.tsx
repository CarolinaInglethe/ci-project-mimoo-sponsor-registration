import React, { useEffect, useState } from 'react';
import Input from '../components/input';
import GreenButton from '../components/GreenButton';

interface stateInfoUser { email: string; password: string}

interface evInputs2 { value: string; name: string; }

interface evInputs { target: evInputs2; }

const Login = () => {
  const [ infoUserLogin, setInfoUserLogin ] = useState<stateInfoUser>({ email:'', password:'' })
  const [ nameButtonLogin, setNameButtonLogin ] = useState('Entrar')
  const [ messageLogin, setMessageLogin ] = useState('');

  const handleChangeInputLogin = ({ target }: evInputs) => {
    const { value,name } = target;
    setInfoUserLogin({
      ...infoUserLogin,
      [name]:value,
    })
  }
  
  useEffect(() => {
    if (infoUserLogin.email.length < 8 
    || infoUserLogin.password.length < 8) {
      return setMessageLogin('Senha ou Email com menos de 8 caracteres')
    }

    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i;
    if (emailRegex.test(infoUserLogin.email) !== true) {
      return setMessageLogin('Formato de email inválido');
    }
    setMessageLogin('')
  }, [infoUserLogin])

  const handleClickButtonLogin = () => {
    setNameButtonLogin('Carregando..');

    
  }

  return (
    <div className="login-container">
      <div className="login-text-container">
        <h1>1º programa de lealdade do Brasil</h1>
        <p>Baseado na empatia, gratidão e sustentabilidade</p>
      </div>

      <form className="login-form-container">
        <h2 style={ { color:'rgba(70, 196, 158, 0.959)' } }>Mimoo</h2>
        <Input
          inputplaceholder="Email"
          name="email"
          type="text"
          handleChange={ handleChangeInputLogin }
        />
        <Input
          inputplaceholder="Senha"
          name="password"
          type="password"
          handleChange={ handleChangeInputLogin }
        />

        <span style={ { color:"red" } }>
          { messageLogin.length > 1 ? <p>{ messageLogin }</p> : ""}
        </span>

        <GreenButton 
          nameButton={ nameButtonLogin }
          handleClick={ handleClickButtonLogin }
        />
      </form>
    </div>
  );
}

export default Login;
