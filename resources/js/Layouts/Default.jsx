import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/inertia-react';
import {Navbar,Footer, Sidebar} from './widgets';
import { ArrowRight, Dehaze, ArrowLeft } from '@mui/icons-material';
import classNames from 'classnames';

function Layout({ children }) {

    //destruct props "auth"
    const { auth } = usePage().props;
    const [toggleSide, setToggleSide] = useState(false);

    function showSide(){
        setToggleSide(!toggleSide)
    }
    return (
        <>
            <div className="flex h-screen overflow-hidden">
                <aside className={(toggleSide ? 'w-0' : 'w-[18rem]') + " max-[640px]:w-0 flex-none overflow-hidden transition-all duration-100 ease-out"}>
                    <Sidebar></Sidebar>
                </aside>
                <main className="flex flex-col w-full">
                    <div className="flex-none bg-[#ADBBDA]  h-16">
                        <button
                            type="button"
                            onClick={showSide}
                            className="px-2"
                        >
                            <Dehaze sx={{ fontSize: 40 }}></Dehaze>
                        </button>
                        <Navbar></Navbar>
                    </div>
                    <div className="flex-grow bg-[#EDE8F5] p-5">{children}</div>
                    <div className="flex-none">
                        <Footer></Footer>
                    </div>
                </main>
            </div>
        </>
    );

}

export default Layout