import { createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import app from '../firebase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('current user', currentUser);
      // get and set token
      if (currentUser) {
        axios
          .post(`${import.meta.env.VITE_API}/jwt`, { email: currentUser.email })
          .then((data) => {
            // console.log(data.data.token)
            localStorage.setItem('school-access-token', data.data.token);
            setLoading(false);
          });
      } else {
        localStorage.removeItem('school-access-token');
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  // useEffect(() => {
  //   if (theme === 'dark') {
  //     document.documentElement.classList.add('dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //   }
  // }, [theme]);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    googleSignIn,
    isDarkMode,
    setIsDarkMode,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
