import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";



export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)
    const [loading,setLoading]= useState(true)



    // const createuser=(email,password)=>{
    //     setLoading(true);
    //     return createUserWithEmailAndPassword(auth, email, password)
    //     .then()
    // }


    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
        
    }

    const logOut =()=>{
        setLoading(true);
        return signOut(auth)
    }

    const signIn =(email,password)=>{
        setLoading(true);
        return  signInWithEmailAndPassword(auth,email,password)

    }


    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> {
            unsubscribe();
        }

    },[])


    const authInfo = {user,createUser,logOut,signIn,loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;