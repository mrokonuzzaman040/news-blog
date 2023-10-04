import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebookF, FaSquareXTwitter, FaInstagram } from "react-icons/fa6";

import qZone1 from '../../../assets/Images/qZone1.png';
import qZone2 from '../../../assets/Images/qZone2.png';
import qZone3 from '../../../assets/Images/qZone3.png';


const RightSiteNav = () => {
    return (
        <div>
            <div className="p-4 mb-6">
                <h2 className='text-3xl mb-4'>Login With</h2>
                <div className="space-y-2">
                    <button className="btn btn-outline w-full">
                        <FcGoogle></FcGoogle>
                        Login With Google
                    </button>
                    <button className="btn btn-outline w-full">
                        <AiFillGithub></AiFillGithub>
                        Login With GitHub
                    </button>
                </div>
            </div>
            <div className="p-4 mb-6">
                <h2 className='text-3xl'> Find Us On</h2>
                <a className='p-4 flex items-center text-lg border rounded-t-lg' href='' >
                    <FaFacebookF className='mr-3'></FaFacebookF>
                    Facebook
                </a>
                <a className='p-4 flex items-center text-lg border-x' href='' >
                    <FaSquareXTwitter className='mr-3'></FaSquareXTwitter>
                    Twitter
                </a>
                <a className='p-4 flex items-center text-lg border rounded-b-lg' href='' >
                    <FaInstagram className='mr-3'></FaInstagram>
                    Instagram
                </a>
            </div>
            <div className="">
                <h2 className='text-3xl'>Q-Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSiteNav;