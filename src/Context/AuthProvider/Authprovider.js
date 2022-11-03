import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../Firebase/Firebase.config';
// import App from '../../App';

export const AuthContext = createContext();
const auth = getAuth(app);

const Authprovider = ({children}) => {
const  [user,setUser] = useState(null);
const [loading,setloading] = useState(true);

const createUser = (email,password)=>{
return createUserWithEmailAndPassword(auth,email,password)
}
const signIn =(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}

const googleProvider = new GoogleAuthProvider();

const googleSignIn=()=>{
    return signInWithPopup(auth,googleProvider)
}

const logOut=()=>{
    return signOut(auth);
}


useEffect(()=>{
const unsubscribe =  onAuthStateChanged(auth,currentUser =>{
        console.log(currentUser);
        setUser(currentUser)
    });
    return() =>{
return unsubscribe();
    }
},[])

    const authInfo={
user,
loading,
createUser,
signIn,
logOut,
googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;