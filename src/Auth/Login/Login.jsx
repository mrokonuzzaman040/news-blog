import React from 'react';
import NavBar from '../../Pages/Shared/NavBar/NavBar';
import { Link } from 'react-router-dom';

const Login = () => {

    const handelLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }

    return (
        <div>
            <NavBar></NavBar>
            <h2 className='text-3xl text-center my-10'>This is login</h2>
            <form onSubmit={handelLogin} className='lg:w-1/2 md:w-3/4 mx-auto'>
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
                    <button className="btn btn-primary text-white">Login</button>
                </div>

                <p className='text-center mt-4 text-sm'>Don't have an Account? <Link to={'/register'} className='text-red-400'>Register</Link></p>
            </form>
        </div>
    );
};

export default Login;