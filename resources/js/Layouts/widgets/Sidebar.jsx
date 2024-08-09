import React, { useState } from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Home } from '@mui/icons-material';

function Sidebar(properti) {
    const [hideSidebar, setHideSidebar] = useState();

    return (
        <>
        <div className="bg-purple-100 h-screen w-full">
          <div className='bg-red-100 py-4 text-center'>
            APLIKASI
          </div>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Data Table" />
            </ListItemButton>
          </ListItem>
        </List>
        </div>

        </>
    );

}

export default Sidebar