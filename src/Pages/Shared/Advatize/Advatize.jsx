import React from 'react';

const Advatize = () => {
    return (
        <div className='p-2'>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-2xl font-bold">Create an Amazing Newspaper</h1>
                        <p className="mb-5">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                        <button className="btn btn-primary">learn more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advatize;