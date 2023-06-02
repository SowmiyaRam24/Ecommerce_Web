import { useState, useRef } from 'react';
import { Button } from 'react-bootstrap';
import classes from './AuthenticationFrom.module.css';
import Navbar1 from '../Navbar/Navbar';

const AuthForm = () => {
  const emailRef=useRef(' ');
  const passwordRef=useRef(' ');
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading,setIsLoading]=useState(false)
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const  submitHandler =(e)=>{
    e.preventDefault();
   const enteredEmail= emailRef.current.value;
   const enteredPassword=passwordRef.current.value;
   setIsLoading(true)
   if(isLogin){
    
   }else{
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDgO-MaSN7ij62GTpB3L7PZ78q6_wHPd8A', 
    {
        method:'POST',
        body:JSON.stringify({
            email:enteredEmail,
            password:enteredPassword,
            returnSecureToken:true
        }),
        headers:{
            'Content-Type':'application/json'
        },
    }
    ).then(res=>{
      setIsLoading(false)
        if(res.ok){
            //..
        }else{
           return res.json().then(data=>{
                let errorMessage='Authentication failed!';
                if(data&&data.error&&data.error.message){
                    errorMessage=data.error.message;
                }
                alert(errorMessage);
            });
        }
        
    })
    
   }
   
  }

  return (
    <>
    <Navbar1/>
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler} >
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email'ref={emailRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            ref={passwordRef}
            required
          />
        </div>
        
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin?'login':'create Account'}</button>}
          {isLoading&&<p style={{color:'white'}}>Loading...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
    </>
    
  );
};

export default AuthForm;