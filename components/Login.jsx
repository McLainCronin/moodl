'use client'
import React, { useState } from 'react'
import { Fugaz_One } from 'next/font/google'
import Button from './Button'
const fugaz = Fugaz_One({ subsets: ['latin'], weight: ['400'] })
import { useAuth, signup, login } from '@/context/AuthContext'


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRegister, setIsRegister] = useState(false)
  const [authenticating, setAuthenticating] = useState(false)
  const { signup, login } = useAuth()
  //create an error state which informs the user of the specific error (password length, email format, etc)

  async function handleSubmit() {
    if (!email || !password || password.length < 6) {
      return
    }

    setAuthenticating(true)

    try {
      if (isRegister) {
        // Register
        console.log('Signing up a new user')
        await signup(email, password)
      } else {
        // Login
        console.log('Logging in an existing user')
        await login(email, password)
      }
    } catch (err) {
      console.log('Failed to authenticate: ', err.message)
    } finally {
      setAuthenticating(false)
    }

    
  }

  return (
    <div className='flex flex-col flex-1 justify-center items-center gap-4'>
      <h3 className={'text-4xl sm:text-5xl md:text-6xl ' + fugaz.className}>
        {isRegister ? 'Register' : 'Login In'}
      </h3>

      <p>You&#39;re one step away!</p>

      <input value={email} onChange={() => {
        setEmail(e.target.value)
      }} className='w-full max-w-[400px] mx-auto px-3 duration-200 hover:border-indigo-600 focus:border-indigo-600 py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-none' placeholder='Email'/>

      <input value={password} onChange={() => {
        setPassword(e.target.value)
      }} className='w-full max-w-[400px] mx-auto px-3 duration-200 hover:border-indigo-600 focus:border-indigo-600 py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-none' placeholder='Password' type='password'/>

      <div className='max-w-[400px] w-full mx-auto'>
        <Button text='Submit' full/>
      </div>

      <p>
        {isRegister ? 'Already have an account? ' : 'Don\'t have an account? '}<button onClick={() => {setIsRegister(!isRegister)}} className='text-indigo-600'>{isRegister ? 'Sign in' : 'Sign up'}</button>
      </p>
    </div>
  )
}
