import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import { MdEdit } from 'react-icons/md'
import './Image.css'

const CoverImage = ({ img }) => {
    return (
        <>
            <Stack
                position={'relative'}
                className="container"
                h={'50vh'}
                w={'100%'}
            >
                <Box
                    bgPos={'center'}
                    bgRepeat={'no-repeat'}
                    bgSize={'cover'}
                    bgImage={img}
                    w={'full'} h={'50vh'}
                    className="arrow"
                ></Box>
                <Stack className="middle">
                    <MdEdit fontSize={'2rem'} color="white" className="button" />
                </Stack>
            </Stack>

        </>
    )
}

export default CoverImage