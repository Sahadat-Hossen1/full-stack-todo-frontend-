import React from 'react'

export default function Signup() {
  return (
    <div>
      <h1 className='text-3xl font-bold text-center mt-10'>Signup Page</h1>
        {/* signup form  */}
      <form action="">
          <div className="form-control w-full max-w-xs mx-auto mt-10">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered w-full max-w-xs" />
          </div>

      </form>
    </div>
  )
}
