import React, {FC, useEffect, useState, ReactNode} from 'react';
import {Box, Typography, TextField, Button, Pagination} from '@mui/material';
import WrapperLoggedView from '../../components/wrapperLoggedView/WrapperLoggedView';
import {Global} from '../../context/store';
import {useNavigate, useLocation} from 'react-router-dom';
import PaginationBarAvailable from '../paginationBar/PaginationBarAvailable';
import ListAvailable from '../../components/listAvailable/ListAvailable';
import ListTalk from '../../components/listTalk/ListTalk';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFilter} from '@fortawesome/free-solid-svg-icons';
import {FilterPopUp} from '../../routes/headHunter/FilterPopUp/FilterPopUp';
import {ContextManager} from '../../context/ContextManager';
//available interview

type Props = {
    children: ReactNode;
};

const HeadHunterMain: FC<Props> = ({children}) => {
    const {dispatchGlobalContext, globalState} = React.useContext(Global);
    const navigate = useNavigate();
    const location = useLocation();
    const [isPopUpVisible, setIsPopUpVisible] = useState<boolean>(false);

    const handleFilterButton = () => {
        setIsPopUpVisible(true);
    };

    const handleClearFiltr = async () => {
        await new ContextManager({
            state: globalState,
            dispatch: dispatchGlobalContext,
        }).clearFilter();
    };

    useEffect(() => {
        (async () => {
            await new ContextManager({
                dispatch: dispatchGlobalContext,
                state: globalState,
            }).ubdateStudents();
        })();
    }, []);

    return (
        <WrapperLoggedView>
            {isPopUpVisible ? (
                <FilterPopUp setIsPopUpVisible={setIsPopUpVisible}/>
            ) : null}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        width: '1200px',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Box
                        sx={{
                            marginTop: '30px',
                            background: '#292A2B',
                            height: '72px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                width: '180px',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                                borderBottom: `${
                                    location.pathname === '/hr/available' ? '2px solid red' : '2px solid transparent'
                                }`,
                            }}
                        >
                            <Typography
                                sx={{
                                    color: 'white',
                                }}
                                onClick={() => {
                                    navigate('/hr/available', {replace: true});
                                }
                                }
                            >
                                Dostępni kursanci
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                width: '180px',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                                borderBottom: `${
                                    location.pathname === '/hr/interview' ? '2px solid red' : '2px solid transparent'
                                }`,
                            }}
                            onClick={() => {
                                navigate('/hr/interview', {replace: true})
                            }
                            }
                        >
                            <Typography
                                sx={{
                                    color: 'white',
                                }}
                            >
                                Do rozmowy
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            marginTop: '5px',
                            background: '#292A2B',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingLeft: '10px',
                            paddingRight: '10px',
                        }}
                    >
                        <Box
                            sx={{
                                marginBottom: '5px',
                                width: '100%',
                                height: '50px',
                                display: 'grid',
                                gridTemplateColumns: 'auto 1fr auto',
                                gridTemplateRows: 'auto',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <TextField
                                    id="outlined-size-small"
                                    placeholder="Szukaj"
                                    sx={{
                                        border: 'none',
                                        background: '#1E1E1F',
                                        outline: 'none',
                                    }}
                                    inputProps={{ style: { color: "#7E7E7E" } }}
                                    size="small"
                                />
                            </Box>
                            <Box/>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            {location.pathname === '/hr/available' && (
                                <Box sx={{
                                    display: 'grid',
                                    gridTemplateColumns: 'auto auto',
                                    gap: '40px',
                                    justifyItems: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Button
                                        sx={{
                                            background: '#1E1E1F',
                                            cursor: 'pointer',
                                        }}
                                        onClick={handleFilterButton}
                                        variant="contained"
                                    >
                                        {' '}
                                        <FontAwesomeIcon icon={faFilter}/>{' '}
                                        <Typography
                                            sx={{
                                                paddingLeft: '5px',
                                            }}
                                        >
                                            Filtrowanie
                                        </Typography>
                                    </Button>
                                    <Button sx={{
                                        background: '#1E1E1F',
                                        cursor: 'pointer',
                                    }}
                                            onClick={handleClearFiltr}
                                            variant="contained">
                                        Wyczyść
                                    </Button>
                                </Box>
                            )}
                        </Box>
                    </Box>
                    <Box>{children}</Box>
                    {location.pathname === '/hr/available' ? <PaginationBarAvailable/> : null}

                </Box>
            </Box>
        </WrapperLoggedView>
    );
};

export default HeadHunterMain;
