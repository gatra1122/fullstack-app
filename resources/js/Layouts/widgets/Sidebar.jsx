import React, { useState,useContext } from 'react';
import { Link } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTable } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {


    return (
        <>
            <div className="bg-light-blue-700 h-full w-full">
                <div className="py-5 text-center font-bold cursor-default bg-gradient-to-b from-light-blue-900 to-light-blue-700">APLIKASI</div>
                <ul>
                    <Link href={route('dashboard')}>
                        <li className={"flex px-6 py-3 " + (route().current('dashboard') ? 'bg-light-blue-800':'hover:bg-light-blue-600 active:bg-light-blue-800')}>
                            <FontAwesomeIcon icon={faHome} className='my-auto'/>
                            <span className='ml-6'>Dashboard</span>
                        </li>
                    </Link>
                    <Link href={route('dataorang.index')} className=''>
                        <li className={"flex px-6 py-3 " + ((route().current('dataorang.index') || route().current('dataorang.add') || route().current('dataorang.edit')) ? 
                            'bg-light-blue-800':'hover:bg-light-blue-600 active:bg-light-blue-800')}>
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