'use client'
import React, { useEffect, useContext, useState } from 'react'
import { auth } from '@/lib/firebase'



const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    const [userDataObj, setUserDataObj] = useState({})
    const [loading, setLoading] = useState(true)


    // AUTH HANDLERS
    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const value = {

    }
    
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}