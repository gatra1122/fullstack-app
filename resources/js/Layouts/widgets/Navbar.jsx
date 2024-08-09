import React from 'react';
import { usePage, Link } from '@inertiajs/inertia-react';

function Navbar() {

    //destruct props "auth"
    const { auth } = usePage().props;

    return (
        <>
            <div className='flex w-full'>
                <span>
                    INI NAVBAR <strong>{auth.user.name}</strong>
                </span>
                {auth.user ? (
                                <ul className="flex flex-row">
                                    <li className="">
                                        <Link
                                            className="nav-link"
                                            href="/dashboard"
                                        >
                                            DASHBOARD
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link
                                            className="nav-link"
                                            href="/logout"
                                            method="POST"
                                        >
                                            LOGOUT
                                        </Link>
                                    </li>
                                </ul>
                            ) : (
                                <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                                    <li className="">
                                        <Link
                                            className="nav-link"
                                            href="/login"
                                        >
                                            LOGIN
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link
                                            className="nav-link"
                                            href="/register"
                                        >
                                            REGISTER
                                        </Link>
                                    </li>
                                </ul>
                            )}
            </div>
        </>
    );

}

export default Navbar