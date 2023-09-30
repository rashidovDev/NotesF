import React, { useState } from 'react'
import { login } from '../actions/user'
import Input from "./Input"
import {useDispatch} from "react-redux"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  return (
    <div className='relative md:w-[400px] border-2 border-[#E52D2B] m-auto md:mt-32 rounded-[15px] p-5'>
      <h3 className='text-center text-[#E52D2B] text-[27px] mb-4'>Login</h3>
      <div className=''>
        <Input value={email} setValue={setEmail} placeholder="Enter email" type="email" />
        <Input password={password} setValue={setPassword} placeholder="Enter password" type="password" />
        <div className='text-right mt-4'>
          <button
            onClick={() => dispatch(login(email, password))}
            className='bg-[#E52D2B] p-1 rounded-[8px] px-2 text-[#fff]'
          >Sign in</button>
        </div>
      </div>
    </div>
  )
}

export default Login