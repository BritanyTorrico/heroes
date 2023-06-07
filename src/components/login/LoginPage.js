import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginPage = () => {
    const { dispatch } = useContext(AuthContext);
    
    const navigate = useNavigate();
    const handleLogin = ()=>{
       
        dispatch({
          type: types.login,
          payload: {
            name: 'Britany'
          }
        })
          navigate('/marvel');
    }
  return (
    <div className='container'>
        <h1>Login</h1>
        <hr />
        <button className='btn btn-primary'
        onClick={handleLogin}
        > Login</button>
    </div>
  )
}
