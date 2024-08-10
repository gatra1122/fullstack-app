import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/inertia-react';
import {Navbar,Footer, Sidebar} from './widgets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Layout({ children }) {

    //destruct props "auth"
    const { auth } = usePage().props;
    const [toggleSide, setToggleSide] = useState(false);

    function showSide(){
        setToggleSide(!toggleSide)
    }

    return (
        <>
            <div className="flex">
                <aside
                    className={
                        (toggleSide ? "w-0" : "w-[18rem]") +
                        " h-screen overflow-hidden max-[640px]:w-0 transition-all duration-200 ease-in-out text-gray-300"
                    }
                >
                    <Sidebar></Sidebar>
                </aside>
                <main className="flex flex-col w-full h-screen overflow-y-scroll">
                    {/* Navbar */}
                    <div className="flex h-16 border-solid border-b border-gray-300">
                            <button
                                type="button"
                                onClick={showSide}
                                className="hover:opacity-70 transition-all ease-in-out text-gray-700 text-2xl mx-2"
                            >
                                <FontAwesomeIcon icon={faBars} />
                            </button>
                            <Navbar
                                judulPage={children.props.judulPage}
                            ></Navbar>
                        </div>
                    {/* Konten */}
                    <div className="grow p-5">{children}</div>
                    {/* Footer */}
                    <div className="py-2 border-solid border-t border-gray-300">
                        <Footer></Footer>
                    </div>
                </main>
            </div>
        </>
    );

}

export default Layout