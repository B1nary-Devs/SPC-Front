
import './index.css'
import * as React from 'react';

import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import BarChartIcon from '@mui/icons-material/BarChart';
import HomeIcon from '@mui/icons-material/Home';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


export default function Menu() {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };


    return (
        <sidebar className="sidebar">
            <div className="sidebar-header">
                <IconButton aria-label="delete" size="large">
                    <MenuIcon />
                </IconButton>
            </div>
            <ul className='sidebar-list'>
                <li>
                    <ListItemButton>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary="Perfil" />
                    </ListItemButton>
                </li>

                <li>
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </li>

                <li>
                    <ListItemButton>
                        <ListItemIcon>
                            <BarChartIcon color='#FFFF'/>
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>
                </li>

                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <FileCopyIcon />
                    </ListItemIcon>
                    <ListItemText primary="Duplicatas" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <InsertDriveFileIcon />
                            </ListItemIcon>
                            <ListItemText primary="A Vencer" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <InsertDriveFileIcon />
                            </ListItemIcon>
                            <ListItemText primary="Vencidas" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <InsertDriveFileIcon />
                            </ListItemIcon>
                            <ListItemText primary="Finalizadas" />
                        </ListItemButton>
                    </List>
                </Collapse>

                <li>
                    <ListItemButton>
                        <ListItemIcon>
                            <GroupIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sacados" />
                    </ListItemButton>
                </li>
            </ul>
        </sidebar>
    )
}