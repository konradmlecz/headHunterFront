import {Button} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import React, {useState} from "react";

export const ImportStudent = () => {
    const [selectedFile, setSelectedFile] = useState<any>();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [uploded, setUploaded] = useState(false)
    const [message, setMessage] = useState({
        isSuccess: false,
        errors: '',
    });

    const changeHandler = (event: any) => {
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

    return(
        <Box sx={{
            marginTop: '60px'
        }}>
            <Button variant="contained" component="label" color={"error"}>
                Upload
                <input hidden type="file" name="file" onChange={changeHandler}/>
            </Button>
            {(isFilePicked && selectedFile) ? (
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
            <Button variant="contained" endIcon={<SendIcon/>} onClick={handleSubmission}
                    color={"error"}>
                Send
            </Button>
            {uploded ?
                (<div>
                    <p style={{
                        margin: "10px 0"
                    }}>Status: {JSON.stringify(message.isSuccess)}</p>
                        {message.errors ?
                            <p>Errors: {JSON.stringify(message.errors)}</p>
                            :
                            <p></p>
                        }
                </div>)
                :
                null
            }
        </Box>
    )
}

