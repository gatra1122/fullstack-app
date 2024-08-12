import React, { useState,useContext,useEffect } from 'react';
//import { Link, usePage } from '@inertiajs/inertia-react';
import { Link, usePage } from '@inertiajs/react';
import {Navbar,Footer, Sidebar} from './widgets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Layout({ children }) {
    const {currentpage} = usePage().props;
    const [toggleSide, setToggleSide] = useState(false);

    function showSide(){
        setToggleSide(!toggleSide)
    }

    return (
        <>
            <div className="flex text-blue-gray-900">
                <aside
                    className={
                        (toggleSide ? "w-0" : "w-[18rem]") +
                        " h-screen overflow-hidden max-[640px]:w-0 transition-width duration-200 ease-in-out text-blue-gray-50"
                    }
                >
                    <Sidebar />
                </aside>
                <main className="flex flex-col w-full h-screen overflow-y-scroll">
                    {/* Navbar */}
                    <div className="flex-none h-16 border-solid border-b border-blue-gray-100">
                        <div className='flex flex-row mt-[14px]'>
                            <button
                                type="button"
                                onClick={showSide}
                                className="hover:opacity-70 transition-all ease-in-out text-gray-700 text-2xl mx-2"
                            >
                                <FontAwesomeIcon icon={faBars} />
                            </button>
                            <Navbar currentpage={currentpage} />
                        </div>
                    </div>
                    {/* Konten */}
                    <div className="grow p-5">{children}</div>
                    {/* Footer */}
                    <div className="py-2 border-solid border-t border-blue-gray-100">
                        <Footer />
                    </div>
                </main>
            </div>
        </>
    );

}

export default Layout