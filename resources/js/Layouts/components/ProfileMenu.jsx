import React from 'react';
import { MenuItem,Menu,IconButton, ListItemIcon, Divider,MenuList } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from '@inertiajs/react';
import { Route } from '@mui/icons-material';

export default function ProfileMenu(){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    function tomboltest(){
        //route('login.index');
    }

    return (
        <>
            <div>
                <IconButton
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                >
                    <FontAwesomeIcon icon={faUserCircle} />
                </IconButton>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        "aria-labelledby": "basic-button",
                    }}
                >
                    <MenuList sx={{ width: 150, maxWidth: "100%" }}>
                        <Link href='/#'>
                            <MenuItem onClick={tomboltest}>Profil</MenuItem>
                        </Link>
                        <Divider sx={{ my: 0.5 }} />
                        <Link href={route('logout')}>
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <FontAwesomeIcon
                                        icon={faRightFromBracket}
                                    />
                                </ListItemIcon>
                                Keluar
                            </MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
            </div>
        </>
    );
}