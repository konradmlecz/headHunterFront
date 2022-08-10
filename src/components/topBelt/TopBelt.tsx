import React from 'react';
import {Box, CardMedia, Typography} from '@mui/material';
import {Popover} from '@mui/material';
import {logout} from '../../utils/logout';
import {useNavigate} from 'react-router-dom';
import {Global} from '../../context/store';

function TopBelt() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();
    const {dispatchGlobalContext, globalState} = React.useContext(Global);
    const handleClick = (_e: any) => {
        setAnchorEl(_e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogOut = async () => {
        const data = await logout();
        if (data.isSuccess) {
            navigate('/login', {replace: true});
            setAnchorEl(null);
            dispatchGlobalContext({
                type: 'CLEAR_USER',
            });
        }
    };

    const handleSettings = async () => {
        navigate('/settings', {replace: true});
    }

    const handleHome = async () => {
        navigate(`/${globalState.user.role === 'hr' ? globalState.user.role + "/available" : globalState.user.role}`, {replace: true});
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Box
            sx={{
                background: '#1E1E1F',
                display: 'flex',
                width: '100vw',
                height: '80px',
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    display: 'grid',
                    width: '1200px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    gridTemplateColumns: 'auto 1fr auto',
                }}
            >
                <CardMedia
                    component="img"
                    height="50"
                    image="../megaK_logo.png"
                    alt="Paella dish"
                />
                <Box/>
                <Box
                    aria-describedby={id}
                    onClick={handleClick}
                    sx={{
                        cursor: 'pointer',
                    }}
                >
                    {globalState.user.firstName && globalState.user.lastName
                        ? globalState.user.firstName +
                        ' ' +
                        globalState.user.lastName
                        : 'Imię i Nazwisko'}
                </Box>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <Box
                        onClick={handleClose}
                        sx={{
                            width: '150px',
                            background: '#1E1E1F',
                            cursor: 'pointer',
                            paddingLeft: '5px',
                        }}
                    >
                        <Typography
                            sx={{
                                padding: '10px 5px',
                                fontSize: '12px',
                                textAlign: 'left',
                            }}
                            onClick={handleHome}
                        >
                            Konto
                        </Typography>
                            <Typography
                            sx={{
                                padding: '10px 5px',
                                fontSize: '12px',
                                textAlign: 'left',
                            }}
                            onClick={handleSettings}
                        >
                            Zmień hasło
                        </Typography>
                        <Typography
                            sx={{
                                padding: '10px  5px',
                                fontSize: '12px',
                                textAlign: 'left',
                            }}
                            onClick={handleLogOut}
                        >
                            Wyloguj
                        </Typography>
                    </Box>
                </Popover>
            </Box>
        </Box>
    );
}

export default TopBelt;
