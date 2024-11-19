'use client'
import React, { useState } from 'react'
import { Flamenco } from 'next/font/google'
import Button from './Button'
const flamenco = Flamenco({ subsets: ['latin'], weight: ['400'] })
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
    <div className='flex flex-col justify-center items-center gap-4 max-w-[400px] '>
      <h3 className={'text-4xl sm:text-5xl md:text-6xl ' + flamenco.className}>
        {isRegister ? 'Register' : 'Login In'}
      </h3>

      <p>You&#39;re one step away!</p>

      <input value={email} onChange={(e) => {
        setEmail(e.target.value)
      }} className='w-full px-3 duration-200 hover:border-[#ef447d] focus:border-[#ef447d] py-2 sm:py-3 border border-solid border-pink-300 rounded-full outline-none' placeholder='Email'/>

      <input value={password} onChange={(e) => {
        setPassword(e.target.value)
      }} className='w-full px-3 duration-200 hover:border-[#ef447d] focus:border-[#ef447d] py-2 sm:py-3 border border-solid border-pink-300 rounded-full outline-none' placeholder='Password' type='password'/>

      <div className='max-w-[400px] w-full mx-auto'>
        <Button clickHandler={handleSubmit} text={authenticating ? 'Submitting' : 'Submit'} full/>
      </div>

      <p>
        {isRegister ? 'Already have an account? ' : 'Don\'t have an account? '}<button onClick={() => {setIsRegister(!isRegister)}} className='text-[#ef447d]'>{isRegister ? 'Sign in' : 'Sign up'}</button>
      </p>
    </div>
  )
}
