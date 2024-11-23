import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { LinearProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import './drawer.css';

export default function DataDrawer() {
    const [isOpen, setIsOpen] = React.useState(false);

    const estadosDuplicatas = useSelector((state) => state.duplicatas.estadosDuplicatas);

    const totalDuplicatas = estadosDuplicatas.reduce((acc, curr) => acc + curr.duplicatas, 0);

    const top5Estados = [...estadosDuplicatas]
        .sort((a, b) => b.duplicatas - a.duplicatas)
        .slice(0, 5);

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
                    backgroundColor: '#04235e',
                    color: '#FFFF',
                    transform: 'translateY(-50%)',
                    '&:hover': {
                        backgroundColor: '#03417b',
                    },
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
                    <p>{totalDuplicatas}</p>
                    <h4>Duplicatas</h4>
                    <h5>Top 5 Estados com maior acúmulo de duplicatas</h5>
                    {top5Estados.map((duplicatas, index) => {
                        const percentual = (duplicatas.duplicatas / totalDuplicatas) * 100;
                        return (
                            <div key={index} className="duplicatas-estatistica">
                                <div className="duplicatas-valor">
                                    <span>{duplicatas.estado}</span>
                                    <span>{duplicatas.duplicatas}</span>
                                </div>
                                <LinearProgress
                                    variant="determinate"
                                    value={percentual}
                                    sx={{
                                        height: 10,
                                        marginTop: '5px',
                                        backgroundColor: '#f1f1f1',
                                        '& .MuiLinearProgress-bar': { backgroundColor: '#165de0' },
                                        borderRadius: '8px',
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            </Drawer>
        </div>
    );
}
