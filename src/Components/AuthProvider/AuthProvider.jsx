/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../../Firebase/firebase.config";
import UseAxiosPublic from "../Hooks/UseAxiosPublic/UseAxiosPublic";


export const AuthContext = createContext(null);
const auth = getAuth(app);

// google
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const axiosPublic = UseAxiosPublic();

    // create user
    const CreateUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // signIn
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    // google
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    // logout
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // console.log(currentUser)
            // jwt
            if (currentUser) {
                // get token and store
                const userInfo = { email: currentUser.email };

                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                        }
                    })
            }
            else {
                // todo remove token local storage
                localStorage.removeItem('access-token')
            }

            setLoading(false);
        });

        return () => {
            return unsubscribe();
        }

    }, [axiosPublic])


    const authInfo = {
        user,
        CreateUser,
        signInUser,
        logOut,
        googleSignIn,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;