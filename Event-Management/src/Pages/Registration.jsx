import React from 'react'
import SocialLogin from '../componets/SocialLogin';

export default function Registration() {
   const handleSubmit = (event) => {
        event.preventDefault();

        // get field values 
        const name = event.target.name.value;
        const email = event.target.email.value;
        const img = event.target.img.value;
        const password = event.target.password.value;


        // validation 
        if (password.length < 6) {
            // toast.error('Password must be at least 6 characters');
            return;
        }


        // creating a new user
        createUser(email, password)
            .then(res => {
                handleUpdateProfile(name, img)
                    .then(() => {
                        // toast.success('User created successfully');
                        navigate('/')

                    })
            })
            .catch(error => {
                // toast.error(error.message)
            })




    }
  return (
    <div className="h-screen mx-auto my-auto">
      <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto mt-32">
  <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-r from-zinc-400 to-zinc-600  bg-clip-border text-white shadow-lg shadow-zinc-600">
    <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
      Registration
    </h3>
  </div>
  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="Full name" className="input input-bordered" name='name' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" name='email' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input type="text" placeholder="image url" className="input input-bordered" name='img' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" name='password' />
                            </div>
                            <div className="form-control mt-6 p-0">
                                <button className="btn  bg-gradient-to-r from-zinc-400 to-zinc-600 text-white" type='submit'>Register</button>
                            </div>
                            <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
      Already have an account?
      <a
        href="/Login"
        className="ml-1 block font-sans text-sm font-bold leading-normal text-pink-500 antialiased"
      >
        Sign In
      </a>
    </p>
                            <SocialLogin />
                        </form>
                    </div>


</div>
    </div>
  )
}

