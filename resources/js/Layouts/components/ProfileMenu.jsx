import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faGear } from '@fortawesome/free-solid-svg-icons';
import { usePage, Link } from '@inertiajs/react';
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Typography,
    Avatar
  } from "@material-tailwind/react";

export default function ProfileMenu(){
    const {auth} = usePage().props;

    return (
        <>
            <div>
                <Menu dismiss={{bubbles: false}}>
                    <MenuHandler>
                        <div className='bg-blue-50 flex flex-row  pr-2 rounded-full cursor-default hover:bg-blue-100 active:hover:bg-blue-200 transition-colors'>
                            <Avatar src="/assets/img/person-icon.png" alt="avatar" variant="rounded" size="sm"/>
                            <span className='ml-1 my-auto'>Halo, <b>{auth.user.name}</b></span>
                        </div>
                    </MenuHandler>
                    <MenuList>
                        <MenuItem>
                        <Typography variant="small" className="font-medium">
                                {auth.user.email}
                            </Typography>
                        </MenuItem>
                        
                    <hr className="my-2 border-blue-gray-50" />
                        <MenuItem className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faGear} />
                            <Typography variant="small" className="font-medium">
                                Profil
                            </Typography>
                        </MenuItem>
                        <Link href={route("logout")}>
                            <MenuItem className="flex items-center gap-2 ">
                                <FontAwesomeIcon icon={faRightFromBracket} />
                                <Typography
                                    variant="small"
                                    className="font-medium"
                                >
                                    Keluar
                                </Typography>
                            </MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
            </div>
        </>
    );
}