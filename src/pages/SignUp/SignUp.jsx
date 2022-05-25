 
import { useContext, useEffect, useState } from 'react';
import logoImg from '../../assets/images/logo.png'
import { AuthContext } from '../../contexts/Auth';
import { FiEye, FiEyeOff} from 'react-icons/fi';
import { IoLogoGoogle, IoLogoFacebook, IoLogoTwitter} from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import image1 from '../../assets/images/slider/7.jpg';


import './signUp.css';
import { SliderImages } from '../../components/SliderImages/SliderImages';

function SignUp() {

  const  {loginSession} = useContext(AuthContext)
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordView, setPasswordView] = useState(false)
  const navigate = useNavigate();

 
  useEffect(() => {
      if(localStorage.getItem("foursome") !== null) {
        navigate("/feed")
      }
    },[navigate])


  function handleCreateAccount(e) {
    e.preventDefault();
   loginSession({login: login, password:password})
   console.log({login: login, password:password});
  }

  function handlePasswordView() {
    if(passwordView === false) {
      setPasswordView(true)
    } else {
      setPasswordView(false)
    }
  }


  return (
    <div className="content-SignUp">
      <div className="bloco">

      <div className="logo">
        <img src={logoImg} alt="Logo Foursome" />
        </div>

      <div className="signUp">
        <div className="form">
          <input type="text" placeholder="Nome completo" value={login} onChange={(e) => setLogin(e.target.value)}/>
          <input type="text" placeholder="Nome de usuário" value={login} onChange={(e) => setLogin(e.target.value)}/>
          <input type="text" placeholder="E-mail" value={login} onChange={(e) => setLogin(e.target.value)}/>
          <input type="text" placeholder="Telefone" value={login} onChange={(e) => setLogin(e.target.value)}/>
          <div className="inputPassword">
          <input type={passwordView === false ? "password" : "text" } placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button className='password' onClick={handlePasswordView}>{passwordView === false ? <FiEye /> : <FiEyeOff /> } </button>
          </div>
          <div className="inputPassword">
          <input type={passwordView === false ? "password" : "text" } placeholder="Confirmar senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button className='password' onClick={handlePasswordView}>{passwordView === false ? <FiEye /> : <FiEyeOff /> } </button>
          </div>
          <div className="buttons">
          <button onClick={handleCreateAccount}> Criar conta </button>
          <br />
          <button className="facebook"> <IoLogoFacebook /><b>Facebook</b></button>
          <button className="google"> <IoLogoGoogle /><b>Google</b></button>
          </div>
          <div className="create">
          <p>Já possui conta? <a href="/"> Entre agora</a></p>
          </div>

        </div>
      </div>
      </div>
      <div className="slide-SignUp">
      <div className="images-SignUp" key={image1}>
            <img src={image1} alt="" />
        </div>
      </div>
    </div>
  )
}

export { SignUp }