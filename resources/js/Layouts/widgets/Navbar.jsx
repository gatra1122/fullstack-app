import React from 'react';
import { usePage, Link } from '@inertiajs/inertia-react';

function Navbar() {

    //destruct props "auth"
    const { auth } = usePage().props;

    return (
        <>
            <div className="flex w-full items-center justify-center md:justify-between">
                <div>DASHBOARD</div>
                <ul className="flex flex-row gap-2 mr-[15px]">
                    <li>
                        Hallo, <strong>{auth.user.name}</strong>
                    </li>
                    <li className="">
                        <Link className="nav-link" href="/logout" method="POST">
                            LOGOUT
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );

}

export default Navbar