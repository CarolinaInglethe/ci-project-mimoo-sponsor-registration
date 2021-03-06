import React, { useContext, useEffect, useState } from 'react';
import Input from '../components/input';
import GreenButton from '../components/GreenButton';
import { Link, useNavigate } from 'react-router-dom'
import { InfoContext } from '../context/infoContext-Provider';

interface evInputs2 { value: string; name: string; }

interface evInputs { target: evInputs2; }

const Login = () => {
  const { infoUserLogin, setInfoUserLogin, setInfoSponsorRegister } = useContext(InfoContext)
  const [ nameButtonLogin, setNameButtonLogin ] = useState('Entrar')
  const [ messageLogin, setMessageLogin ] = useState('null');
  const navigate = useNavigate()

  useEffect(() => {
    setInfoUserLogin({ email: '', password: '' })
    setInfoSponsorRegister({
      name: '',
      image: '',
      cnpj: '',
      situation: '',
      certified: true,
      points: 0,
      contactName: '',
      contactEmail: '',
      contactPhone: '',
      accountType: '',
      accountPlan: '',
    })
  }, [])

  const handleChangeInputLogin = ({ target }: evInputs) => {
    const { value,name } = target;
    setInfoUserLogin({
      ...infoUserLogin,
      [name]:value,
    })
  }

  const handleClickButtonLogin = () => {
    if (infoUserLogin.email.length < 8 
    || infoUserLogin.password.length < 8) {
      return setMessageLogin('Senha ou Email com menos de 8 caracteres')
    }

    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i;
    if (emailRegex.test(infoUserLogin.email) !== true) {
      return setMessageLogin('Formato de email inválido');
    }
    setMessageLogin('null');
    setNameButtonLogin('Carregando..');
    navigate('/sponsors');
  }

  return (
    <div className="login-container">
      <div className="login-text-container">
        <h1>1º programa de lealdade do Brasil</h1>
        <p>Baseado na empatia, gratidão e sustentabilidade</p>
      </div>

      <form className="login-form-container">
        <h2 style={ { color:'#16D8B3' } }>Mimoo :)</h2>
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

        <Link style={ { color: 'rgba(70, 196, 158, 0.959)'  } } to="/forgotPassword">Esqueceu a senha?</Link>
        <span style={ { color: 'red'} }>
          { messageLogin === 'null' ? "" : <p>{ messageLogin }</p>}
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
