import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/inertia-react';
// import Navbar from './widgets/Navbar';
import {Navbar,Footer, Sidebar} from './widgets';

function Layout({ children }) {

    //destruct props "auth"
    const { auth } = usePage().props;
    const [toggleSide, setToggleSide] = useState(true);

    function showSide(){
        setToggleSide(!toggleSide)
    }

    return (
        <>
            <div className="flex">
                <aside hidden={toggleSide ? 1 : 0}>
                        <Sidebar></Sidebar>
                </aside>
                <main className="flex flex-col h-screen w-full">
                    <div className='flex'>
                    <button type='button' className='bg-green-500 px-2' onClick={showSide}>Show/Hide</button>
                    <Navbar></Navbar>
                    </div>
                    <div className="bg-yellow-100 h-full">{children}</div>
                    <div className="">
                        <Footer></Footer>
                    </div>
                </main>
            </div>
        </>
    );

}

export default Layout