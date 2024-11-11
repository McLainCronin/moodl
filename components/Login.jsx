'use client'
import React, { useState } from 'react'
import { Fugaz_One } from 'next/font/google'
import Button from './Button'
const fugaz = Fugaz_One({ subsets: ['latin'], weight: ['400'] })


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRegister, setIsRegister] = useState(false)

  async function handleSubmit() {
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
