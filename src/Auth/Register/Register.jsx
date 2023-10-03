import React from 'react';
import NavBar from '../../Pages/Shared/NavBar/NavBar';
import { Link } from 'react-router-dom';

const Register = () => {

    const handelRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        console.log(name, photo, email, password);
    }

    return (
        <div>
            <NavBar></NavBar>
            <h2 className='text-3xl text-center my-10'>Register</h2>
            <form onSubmit={handelRegister} className='lg:w-1/2 md:w-3/4 mx-auto'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input name='photo' type="text" placeholder="Photo URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name='email' type="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name='password' type="password" placeholder="Password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary text-white">Register now</button>
                </div>

                <p className='text-center mt-4 text-sm'>Allready have an account? <Link to={'/login'} className='text-red-400'>Login</Link></p>
            </form>
        </div>
    );
};

export default Register;