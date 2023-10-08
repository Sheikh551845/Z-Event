import React, { useContext } from 'react';

import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { toast } from 'react-toastify';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);


    
    if (loading) 
    return <h1 className="text-5xl h-80vh w-fit mx-auto mt-15 font-bold">Loading.....</h1>
    

    if (!user?.email) {
        toast("Please Log In ")
        
        return <Navigate to='/login' />
    }



    return children;
};

export default PrivateRoute;