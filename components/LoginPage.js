import React from 'react' 
import Button from './Button';
import { Fugaz_One, Open_Sans } from "next/font/google";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });
export default function LoginPage() {
  return (
    <div className='flex flex-col flex-1 justify-center items-center gap-4'>
      <h3 className={'text-4xl sm:text-5xl md:text-6xl  '+fugaz.className}>
        Log In / Register 
      </h3>
      <p>
        You&#39; are one step away
      </p>
      <input className='max-w-[400px] w-full mx-auto px-3 py-2  sm:py-3 border border-solid border-indigo-400 rounded-full outline-none duration-200 hover:border-indigo-600 focus-border-indigo-600' placeholder='Email'/>
      <input className='max-w-[400px] w-full mx-auto px-3 py-2  sm:py-3 border border-solid border-indigo-400 rounded-full outline-none duration-200 hover:border-indigo-600 focus-border-indigo-600' placeholder='password'/>
      <div className='max-w-[400px] w-full mx-auto '>
        <Button text="Summit" full />
      </div>
      <p>Don&#39;t have an account?  <span className="text-indigo-600"> Sign up</span></p>
      
    
    </div>
  )
}
