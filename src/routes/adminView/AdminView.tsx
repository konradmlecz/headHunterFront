import React, {FC, useEffect, useState} from 'react';
import WrapperLoggedView from '../../components/wrapperLoggedView/WrapperLoggedView';
import Box from '@mui/material/Box';
import {Global} from '../../context/store';
import { useNavigate } from "react-router-dom";
import {FilterPopUp} from "../headHunter/FilterPopUp/FilterPopUp";
import {Button, TextField, Typography} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilter} from "@fortawesome/free-solid-svg-icons";
import SendIcon from '@mui/icons-material/Send';
import '../../index.css'
function AdminView() {

  const { dispatchGlobalContext, globalState } = React.useContext(Global);
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState<any>();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [uploded, setUploaded] = useState(false)
  const [message, setMessage] = useState({
    isSuccess: false,
    errors: '',
  })

  const changeHandler = (event : any) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
    setUploaded(false);
  };


  const handleSubmission = () => {
    const formData = new FormData();

    formData.append('studentData', selectedFile);

    fetch(
        'http://localhost:3001/admin/import',
        {
          method: 'POST',
          body: formData,
        }
    )
        .then((response) => response.json())
        .then((result) => {
          console.log('Success:', result)
          setUploaded(true)
          setMessage(result)
        })
        .catch((error) => {
          console.error('Error:', error);
          setUploaded(true)
          setMessage(error)
        });
  };

  useEffect(()=>{
    if(globalState.user.role !== "admin") navigate ("/login",{ replace: true });
  },[])

  return (
        <WrapperLoggedView>
          <Box sx={{
            display:'flex',
            justifyContent:'center',
          }}>
            <Box sx={{
              width:'1200px',
              display:'flex',
              flexDirection: 'column',
            }}>
              <Box sx={{
                marginTop: '30px',
                background:'#292A2B',
                height:'72px',
                display: 'flex',
                alignItems:'center',
              }}>
                <Box sx={{
                  width:'180px',
                  height:'100%',
                  display:'flex',
                  justifyContent:'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                  // borderBottom: `${tab === 'Available' ? '2px solid red' : '2px solid transparent'}`
                }}>
                  <Typography sx={{
                    color:'white'
                  }} onClick={()=> navigate("/hr/available", { replace: true })}>Import Studentów</Typography>
                </Box>
                <Box sx={{
                  width:'px',
                  height:'100%',
                  display:'flex',
                  justifyContent:'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                  //      borderBottom: `${tab === 'Talk' ? '2px solid red' : '2px solid transparent'}`
                }}  onClick={()=> navigate("/hr/interview", { replace: true })}>
                  <Typography sx={{
                    color:'white'
                  }}>Dodaj - Head Hunter'a</Typography>
                </Box>
              </Box>
              <Box sx={{
                marginTop: '60px'}}>
                  <Button variant="contained" component="label" color={"error"}>
                  Upload
                  <input hidden  type="file" name ="file" onChange={changeHandler} />
                </Button>
                  {(isFilePicked && selectedFile)? (
                      <div>
                        <p>Filename: {selectedFile.name}</p>
                        <p>Filetype: {selectedFile.type}</p>
                        <p>Size in bytes: {selectedFile.size}</p>
                        <p>
                          lastModifiedDate:{' '}
                          {selectedFile.lastModifiedDate.toLocaleDateString()}
                        </p>
                      </div>
                  ) : (
                      <p>Select a file to show details</p>
                  )}
                <Button variant="contained" endIcon={<SendIcon />} onClick={handleSubmission} color={"error"}>
                  Send
                </Button>
                {uploded ?
                    (<div>
                      <p>Status: { JSON.stringify(message.isSuccess) }</p>
                      <p>Errors: { JSON.stringify(message.errors) }</p>
                    </div>)
                :
                    null
                }
              </Box>
            </Box>
          </Box>
        </WrapperLoggedView>
    );
  }

  export default AdminView;
