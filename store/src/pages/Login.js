import './Login.css'
import Navbar from '../components/Navbar';

const Login = () => {
  return (
    <div className='Login-body'>
      <Navbar/>
    <div className='Login-Container'>
      <div className='Login-Wrapper'>
        <div className='Login-Title'>SIGN IN</div>
        <div className='Login-Form'>
          <input placeholder="Username" />
          <input placeholder="Password" />
          <btn className='Login-Button'>LOGIN</btn>
          <a className='Login-Link' href="Uptrend-home.com"> DO NOT REMEMBER THE PASSWORD? </a>
          <a className='Login-Link' href="Uptrend-register.com"> CREATE A NEW ACCOUNT</a>
      </div>
    </div>
    </div>
    </div>

  );
};

export default Login;