import React from 'react'
import { useState } from 'react'
import Input from './Input'
import { registration } from '../actions/user'

const Registration = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className='relative md:w-[400px] border-2 border-[#E52D2B] m-auto md:mt-32 rounded-[15px] p-5'>
      <h3 className='text-center text-[#E52D2B] text-[27px] mb-4'>Sign up</h3>
      <div className=''>
        <Input value={email} setValue={setEmail} placeholder="Enter email" type="email" />
        <Input password={password} setValue={setPassword} placeholder="Enter password" type="password" />
        <div className='text-right mt-4'>
          <button
            onClick={() => registration(email, password)}
            className='bg-[#E52D2B] p-1 rounded-[8px] px-2 text-[#fff]'
          >Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Registration