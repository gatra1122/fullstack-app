import React from 'react';
import { usePage, Link } from '@inertiajs/inertia-react';
import {ProfileMenu} from './../components';

function Navbar(properti) {
    const { auth } = usePage().props;
    return (
        <>
            <div className="flex w-full md:justify-between">
                <b className="cursor-default my-auto ml-[15px] uppercase">{properti.judulPage}</b>
                <ul className="flex flex-row gap-2 items-center mr-[15px]">
                    <li>
                        Hallo, <strong>{auth.user.name}</strong>
                    </li>
                    <li>
                        <ProfileMenu></ProfileMenu>
                    </li>
                </ul>
            </div>
        </>
    );

}

export default Navbar