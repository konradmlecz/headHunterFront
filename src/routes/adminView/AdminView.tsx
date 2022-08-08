import React, {FC, FormEvent, useEffect, useState} from 'react';
import WrapperLoggedView from '../../components/wrapperLoggedView/WrapperLoggedView';
import Box from '@mui/material/Box';
import {Global} from '../../context/store';
import {useNavigate} from "react-router-dom";
import {Button, Input, styled, TextField, Typography} from "@mui/material";
import './AdminView.css'
import {ImportStudent} from "../../components/importStudent/ImportStudent";
import {ImportHeadHunter} from "../../components/importHeadHunter/ImportHeadHunter";

function AdminView() {

    const {dispatchGlobalContext, globalState} = React.useContext(Global);
    const [importStudentView, setImportStudentView] = useState(true)
    const [addHeadHunterView, setAddHeadHunterView] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        if (globalState.user.role !== "admin") navigate("/login", {replace: true});
    }, [])

    return (
        <WrapperLoggedView>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Box sx={{
                    width: '1200px',
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <Box sx={{
                        marginTop: '30px',
                        background: '#292A2B',
                        height: '72px',
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <Box sx={{
                            width: '180px',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer',
                            borderBottom: `${importStudentView === true ? '2px solid red' : '2px solid transparent'}`
                        }}>
                            <Typography sx={{
                                color: 'white'
                            }} onClick={e => {
                                setImportStudentView(true)
                                setAddHeadHunterView(false)
                            }}>Import Studentów</Typography>
                        </Box>
                        <Box sx={{
                            width: 'px',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer',
                            borderBottom: `${addHeadHunterView === true ? '2px solid red' : '2px solid transparent'}`
                        }} onClick={e => {
                            setImportStudentView(false)
                            setAddHeadHunterView(true)
                        }}>
                            <Typography sx={{
                                color: 'white'
                            }}>Dodaj - Head Hunter'a</Typography>
                        </Box>
                    </Box>
                    {importStudentView ?
                        <ImportStudent/>
                        :
                        <ImportHeadHunter/>
                    }
                </Box>
            </Box>
        </WrapperLoggedView>
    );
}

export default AdminView;
