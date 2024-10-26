
import './index.css'
import * as React from 'react';
import { useState } from 'react';

import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import BarChartIcon from '@mui/icons-material/BarChart';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom'

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


export default function Menu() {

    const [open, setOpen] = useState(false);
    const [sidebarOpen, setsidebarOpen] = useState(false);

    const handleOpenClick = () => {
        setsidebarOpen(true);
    };

    const handleReturnClick = () => {
        setsidebarOpen(false);
    };

    const handleClick = () => {
        setOpen(!open);
    };


    return (
        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
            <div className="sidebar-header">
                {sidebarOpen ? (
                    <IconButton className="returnButton" aria-label="open" onClick={handleReturnClick}>
                        <MenuOpenIcon />
                    </IconButton>
                ) : (
                    <IconButton aria-label="open" onClick={handleOpenClick}>
                        <MenuIcon />
                    </IconButton>
                )}
            </div>
            <ul className='sidebar-list'>
                <Link className='sidebar-item' to={'/home'}>
                    <li>
                        <ListItemButton>
                            <ListItemIcon>
                                <HomeIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </li>
                </Link>


                <Link className='sidebar-item' to={'/dashboard'}>
                    <li>
                        <ListItemButton>
                            <ListItemIcon>
                                <BarChartIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItemButton>
                    </li>
                </Link>


                <ListItemButton className='sidebar-item' onClick={handleClick && handleOpenClick}>
                    <ListItemIcon>
                        <FileCopyIcon sx={{ color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText primary="Duplicatas" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>

                        <Link className='sidebar-item' to={''}>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <InsertDriveFileIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary="A Vencer" />
                            </ListItemButton>
                        </Link>

                        <Link className='sidebar-item' to={''}>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <InsertDriveFileIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary="Vencidas" />
                            </ListItemButton>
                        </Link>

                        <Link className='sidebar-item' to={''}>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <InsertDriveFileIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary="Finalizadas" />
                            </ListItemButton>
                        </Link>
                    </List>
                </Collapse>

                <Link to={'/sacados'}>
                    <li>
                        <ListItemButton>
                            <ListItemIcon>
                                <GroupIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText primary="Sacados" />
                        </ListItemButton>
                    </li>
                </Link>

            </ul>
        </div>
    )
}