import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithPopup } from 'firebase/auth';
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

  const authInfo = { user, setUser, signInWithProvider, createUserRegister };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;