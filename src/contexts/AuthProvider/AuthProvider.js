import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';
export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)

  const signInWithProvider = (provider) => {
    return signInWithPopup(auth, provider);
  }

  const createUserRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signInWithEmailPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const authInfo = { user, setUser, signInWithProvider, createUserRegister, signInWithEmailPass };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;