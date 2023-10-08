import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider';
import { useNavigate } from 'react-router-dom';

export default function SocialLogin() {
    const navigate = useNavigate()
    const {  googleLogin } = useContext(AuthContext);


    const handleSocialLogin = (media) => {
        media()
            .then(res => {
                // toast.success('User logged in successfully');
                // navigate('/')
                console.log(res);
            })
            .catch(error => {
                // toast.error(error.message)
                console.log(error)
            })
    }
  return (
    <div className="py-3">
         <div className="divider">continue with</div>
            <div className="flex justify-around ">
                <button
                    onClick={() =>handleSocialLogin(googleLogin)}
                    className="btn btn-neutral btn-sm">Google</button>
               
            </div>
    </div>
           
        
  )
}


