import React, { useState } from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Home, CalendarMonth } from '@mui/icons-material';

function Sidebar(properti) {
    return (
        <>
        <div className="bg-gray-700 h-screen w-full">
          <div className='relative py-5 text-center'>
            APLIKASI
          </div>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home sx={{ color:'#d1d5db' }}/>
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <CalendarMonth sx={{ color:'#d1d5db' }}></CalendarMonth>
              </ListItemIcon>
              <ListItemText primary="Data Table" />
            </ListItemButton>
          </ListItem>
        </List>
        </div>
        </>
    );

}

export default Sidebar