import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="w-screen h-screen  content-center bg-[url('/bg-dark.jpg')] bg-cover bg-center p-4" >
      <div className="bg-white rounded-xl max-w-xl mx-auto p-8 shadow-2xl" >
        <header className="mb-6">
          <div className="flex items-center justify-center">
            <Image src={'/logo.svg'} alt="logo" width={48} height={48} />
          </div>
          <h2 className="text-2xl font-semibold text-center">Welcome back!</h2>
        </header>
        <div className="max-w-md mx-auto">
          <button className="p-3 border-2 border-indigo-500 font-semibold rounded-xl w-full hover:bg-indigo-500 hover:text-white cursor-pointer transition-colors duration-150">Continue with Google</button>
        </div>
        <div className="flex flex-row items-center justify-center gap-2 my-6 max-w-md mx-auto">
          <div className="h-px bg-gray-300 w-full"></div>
          <div>OR</div>
          <div className="h-px bg-gray-300 w-full"></div>
        </div>
        <form className="flex flex-col gap-4 max-w-md mx-auto">
          <div className="border-2 border-gray-400 rounded-xl flex items-center focus-within:border-indigo-500">
            <span className="inline-block px-2">
              <EnvelopeIcon className='size-5' />
            </span>
            <input type="text" className="border-0 outline-0 py-2 w-full" placeholder="Enter email" />
          </div>
          <div className="border-2 border-gray-400 rounded-xl flex items-center focus-within:border-indigo-500">
            <span className="inline-block px-2">
              <LockClosedIcon className='size-5' />
            </span>
            <input type="text" className="border-0 outline-0 py-2 w-full" placeholder="Enter password" />
          </div>
          <div>
            <button className="p-3 bg-indigo-600 text-white font-semibold rounded-xl w-full hover:bg-indigo-500 hover:text-white cursor-pointer transition-colors duration-150">Login</button>
            <Link href='reset-password' className="text-sm mt-2 hover:underline hover:text-indigo-500">Forgot password?</Link>
          </div>
        </form>
      </div>
      <div className="bg-white rounded-xl max-w-xl mx-auto p-4 mt-5 flex flex-row justify-between items-center shadow-2xl">
        <p>New User?</p>
        <Link href='/register' className="bg-indigo-600 text-white font-semibold rounded-xl py-2 px-3 hover:bg-indigo-500 hover:text-white cursor-pointer transition-colors duration-150">Register Now</Link>
      </div>
    </div>
  );
}