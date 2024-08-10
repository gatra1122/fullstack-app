import React, { useState } from 'react';
import { Link } from '@inertiajs/inertia-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTable } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
    return (
        <>
            <div className="bg-gray-700 h-screen w-full">
                <div className="py-5 text-center font-bold cursor-default">APLIKASI</div>
                <ul>
                    <Link href={route('dashboard')}>
                        <li className={"flex px-6 py-3 " + (route().current('dashboard') ? 'bg-gray-800':'hover:bg-gray-600')}>
                            <FontAwesomeIcon icon={faHome} className='my-auto'/>
                            <span className='ml-6'>Dashboard</span>
                        </li>
                    </Link>
                    <Link href={route('dataorang.index')} className=''>
                        <li className={"flex px-6 py-3 " + (route().current('dataorang.index') ? 'bg-gray-800':'hover:bg-gray-600')}>
                            <FontAwesomeIcon icon={faTable} className='my-auto'/>
                            <span className='ml-6'>Data Orang</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </>
    );

}

export default Sidebar