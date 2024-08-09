import React, { useState } from 'react';
import { Link } from '@inertiajs/inertia-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTable } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {

    return (
        <>
            <div className="bg-gray-700 h-screen w-full">
                <div className="py-5 text-center">APLIKASI</div>
                <ul className="bg-gray-600">
                    <Link href="/dashboard">
                        <li className="flex p-3 bg-gray-800">
                            <FontAwesomeIcon icon={faHome} className='my-auto'/>
                            <span className='ml-6'>Dashboard</span>
                        </li>
                    </Link>
                    <Link href="/dashboard" className=''>
                        <li className="flex p-3 bg-gray-600 hover:bg-gray-800">
                            <FontAwesomeIcon icon={faTable} className='my-auto'/>
                            <span className='ml-6'>Data</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </>
    );

}

export default Sidebar