import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
        <div className='space-y-10'>
            <h2 className='text-2xl'>All Categorys</h2>
            {
                category.map(category => <Link to={`category/${category.id}`} className='block ml-4 text-xl' key={category.id}>{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;