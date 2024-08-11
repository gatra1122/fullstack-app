import React from 'react';
import {ProfileMenu} from './../components';

function Navbar(properti) {
    return (
        <>
            <div className="h-full flex-1">
                <div className='flex md:justify-between'>
                <b className="cursor-default my-auto ml-[15px] uppercase">{properti.currentpage}</b>
                <ul className="gap-2 items-center mr-[15px]">
                    <li>
                        <ProfileMenu></ProfileMenu>
                    </li>
                </ul>
                </div>

            </div>
        </>
    );

}

export default Navbar