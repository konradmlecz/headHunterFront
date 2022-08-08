import React, { FC } from 'react';
import { Box } from '@mui/material';
import MiniBox from '../miniBox/MiniBox';
import { qualitiesStudent, qualitiesText } from '../../constant/qualities';
import { Student } from '../../context/store';

type Props = {
    itemStudent: Student;
    open: boolean;
};

const MiniBoxes: FC<Props> = ({ itemStudent, open }) => {
    return (
        <>
            {open && (
                <Box sx={{ display: 'flex' }}>
                    {qualitiesStudent.map((item) => (
                        <MiniBox
                            key={item}
                            textTop={qualitiesText[item]}
                            textDown={itemStudent[item]}
                            quality={item}
                        />
                    ))}
                </Box>
            )}
        </>
    );
};

export default MiniBoxes;
