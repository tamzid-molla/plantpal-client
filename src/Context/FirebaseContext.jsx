import React, { createContext, useEffect, useState,  } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase';
export const AuthContext = createContext();

const FirebaseContext = ({ children }) => {
    //Toggle MODE 
    const [dark, setDark] = useState(() => {
        const saveMode = localStorage.getItem('darkMode');
        return saveMode ? JSON.parse(saveMode) : false;
    });
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(dark));
    }, [dark]);

    //Create user With email and password
    const registerWithEmailPass = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //Login user with email and password
    const loginWithEmailPass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    //Login With google 
    const googleLogin = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }

    //Update profile 
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }

    //LogOut User 
    const LogoutUser = () => {
        setLoading(true)
        return signOut(auth)
    }


    //monitor user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser);
            setLoading(false);
        });
        return () => {
            unsubscribe()
        }
    }, []);

    const userData = {
        registerWithEmailPass,
        loginWithEmailPass,
        user,
        setUser,
        updateUser,
        loading,
        setLoading,
        LogoutUser,
        googleLogin,
        setDark,
        dark
    }
    return (
        <AuthContext value={userData}>
            {children}
       </AuthContext>
    );
};

export default FirebaseContext;