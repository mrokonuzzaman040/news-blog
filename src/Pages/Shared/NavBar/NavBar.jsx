import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import userImg from '../../../assets/images/User.png';
import { AuthContex } from '../../../Provides/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const NavBar = () => {

    const { user, logoutUser } = useContext(AuthContex);


    const handelSignout = () => {
        logoutUser()
            .then(result => {
                toast.success('Logout Success');
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/career'}>Career</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className="flex items-center flex-row-reverse gap-2">
                        <button className='btn btn-sm' onClick={handelSignout}>Signout</button>
                        <Link to={'/profile'} className="btn btn-ghost btn-circle avatar">
                            <img className='rounded-full' src={user.photoURL} />
                        </Link>
                    </div> : <Link to={'/login'}>
                        <button className='btn btn-sm'>Login</button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default NavBar;