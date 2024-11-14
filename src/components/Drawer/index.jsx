import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { LinearProgress } from '@mui/material';
import './drawer.css'

export default function DataDrawer() {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsOpen(open);
    };

    return (
        <div>
            <IconButton
                onClick={toggleDrawer(true)}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: 60,
                    zIndex: 22,
                    backgroundColor: '#FFFF',
                    transform: 'translateY(-50%)',
                }}
            >
                <ArrowForwardIcon />
            </IconButton>
            <Drawer
                anchor="left"
                open={isOpen}
                onClose={toggleDrawer(false)}
            >
                <div className="corpo-drawer">
                    <h3>Total</h3>
                    <p>2500</p>
                    <h4>Duplicatas</h4>
                    <h5>Estados que possuem mais acúmulo</h5>
                    <div className="duplicatas-estatistica">
                        <span>BA</span>
                        <LinearProgress variant="determinate" value={67}
                            sx={{ height: 10, marginTop: '5px' , backgroundColor: '#f1f1f1', '& .MuiLinearProgress-bar': { backgroundColor: '#ff0000' }, borderRadius: '8px' }}
                        />
                    </div>
                    <div className="duplicatas-estatistica">
                        <span>BA</span>
                        <LinearProgress variant="determinate" value={67}
                            sx={{ height: 10, marginTop: '5px' , backgroundColor: '#f1f1f1', '& .MuiLinearProgress-bar': { backgroundColor: '#ff0000' }, borderRadius: '8px' }}
                        />
                    </div>
                </div>
            </Drawer>
        </div>
    );
}
