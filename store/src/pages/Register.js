import './Register.css'
import Navbar from '../components/Navbar';

const Register = () => {
  return (
   <div className='Register-body'>
    <Navbar/>
    <div className='Register-Container'>
       
      <div className='Register-Wrapper'>
        <div className='Register-Title'>CREATE AN ACCOUNT</div>
        <div className='Register-Form'>
          <input placeholder="First Name" />
          <input placeholder="Last Name" />
          <input placeholder="Username" />
          <input placeholder="Email" />
          <input placeholder="Password" />
          <input placeholder="Confirm Password" />
          <div className='Register-Agreement'>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </div>
          <btn className='Register-button'>CREATE</btn>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Register;