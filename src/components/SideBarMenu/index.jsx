import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import BarChartIcon from '@mui/icons-material/BarChart';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FlipToFrontIcon from '@mui/icons-material/FlipToFront';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

import './index.css';
import { logoutUser } from '../../redux/user/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

export default function SideBarMenu() {

    const [open, setOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOpenClick = () => {
        setSidebarOpen(true);
    };

    const handleReturnClick = () => {
        setSidebarOpen(false);
        setOpen(false);
    };

    const handleClick = () => {
        handleOpenClick();
        setOpen(!open);
    };

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate('/');
    };

    return (
        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
            <div className="sidebar-header">
                {sidebarOpen ? (
                    <IconButton className="returnButton" aria-label="open" onClick={handleReturnClick}>
                        <MenuOpenIcon sx={{ color: 'white' }} />
                    </IconButton>
                ) : (
                    <IconButton aria-label="open" onClick={handleOpenClick}>
                        <MenuIcon sx={{ color: 'white' }} />
                    </IconButton>
                )}
            </div>
            <ul className='sidebar-list'>
                <li>
                    <Link className='sidebar-item' to={'/home'}>
                        <ListItemButton>
                            <ListItemIcon>
                                <HomeIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </Link>
                </li>
                <li>
                    <Link className='sidebar-item' to={'/profile'}>
                        <ListItemButton>
                            <ListItemIcon>
                                <AccountCircleIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText primary="Perfil" />
                        </ListItemButton>
                    </Link>
                </li>
                <li>
                    <Link className='sidebar-item' to={'/dashboard'}>
                        <ListItemButton>
                            <ListItemIcon>
                                <BarChartIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItemButton>
                    </Link>
                </li>

                {/* Show Duplicatas menu only if the user profile is Cessionaria */}
                {user.perfil === 'Cessionaria' && (
                    <>
                        <ListItemButton className='sidebar-item' onClick={handleClick}>
                            <ListItemIcon>
                                <FileCopyIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText primary="Duplicatas" />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <li>
                                    <Link className='sidebar-item' to={'/duplicatas/duplicatesDue'}>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                                <InsertDriveFileIcon sx={{ color: 'white' }} />
                                            </ListItemIcon>
                                            <ListItemText primary="A Vencer" />
                                        </ListItemButton>
                                    </Link>
                                </li>
                                <li>
                                    <Link className='sidebar-item' to={'/duplicatas/expiredDue'}>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                                <InsertDriveFileIcon sx={{ color: 'white' }} />
                                            </ListItemIcon>
                                            <ListItemText primary="Vencidas" />
                                        </ListItemButton>
                                    </Link>
                                </li>
                                <li>
                                    <Link className='sidebar-item' to={'/duplicatas/completedDue'}>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                                <InsertDriveFileIcon sx={{ color: 'white' }} />
                                            </ListItemIcon>
                                            <ListItemText primary="Finalizadas" />
                                        </ListItemButton>
                                    </Link>
                                </li>
                            </List>
                        </Collapse>
                    </>
                )}

                {/* Conditional rendering based on the user profile */}
                {user.perfil === 'Cessionaria' ? (
                    <li>
                        <Link to={'/sacados'}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <GroupIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary="Sacados" />
                            </ListItemButton>
                        </Link>
                    </li>
                ) : (
                    <>
                        <li>
                            <Link to={'/users'}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <PersonIcon sx={{ color: 'white' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Usuários" />
                                </ListItemButton>
                            </Link>
                            <Link to={'/signup'}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <GroupAddIcon sx={{ color: 'white' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Cadastrar Usuário" />
                                </ListItemButton>
                            </Link>
                        </li>
                        <li>
                            <Link className='sidebar-item' to={'/mapa'}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <LocationOnIcon sx={{ color: 'white' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Praça de Pagamento" />
                                </ListItemButton>
                            </Link>
                        </li>
                        <li>
                            <Link className='sidebar-item' to={'/anomalies'}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <ReportGmailerrorredIcon sx={{ color: 'white' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Anomalias" />
                                </ListItemButton>
                            </Link>
                        </li>
                        <li>
                            <Link className='sidebar-item' to={'/conciliation'}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <FlipToFrontIcon sx={{ color: 'white' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Conciliação Mensal" />
                                </ListItemButton>
                            </Link>
                        </li>
                    </>
                )}

                <li>
                    <Link className='sidebar-item' onClick={handleLogout} to={'/'}>
                        <ListItemButton>
                            <ListItemIcon>
                                <LogoutIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText primary="Sair" />
                        </ListItemButton>
                    </Link>
                </li>

            </ul>
        </div>
    );
}
