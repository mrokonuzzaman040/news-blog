import React, { useContext } from 'react';
import Header from '../../Pages/Shared/Header/Header';
import NavBar from '../../Pages/Shared/NavBar/NavBar';
import { AuthContex } from '../../Provides/AuthProvider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContex);
    const { displayName, email, photoURL } = user;
    return (
        <div>
            <div className="">
                <Header></Header>
                <NavBar></NavBar>
            </div>
            <div className="mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <div className="avatar">
                        <div className="w-24 rounded">
                            <img src={photoURL} />
                        </div>
                    </div>
                </div>
                <h2 className='font-normal'>Name: {displayName}</h2>
                <h2 className='font-normal'>Email: {email}</h2>
                
            </div>

        </div>
    );
};

export default Profile;