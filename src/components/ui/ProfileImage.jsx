import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import { MdEdit } from 'react-icons/md'
import { useLocation } from 'react-router-dom'

const ProfileImage = ({ img }) => {
    var route = useLocation()

    return (
        <>
            <Stack
                position={'relative'}
                className={route.pathname === '/account' ? 'container' : ''}
                w={'52'}
                h={'52'}
                border={'2px solid white'}
                marginTop={'-28'}
            >
                <Box
                    bgPos={'center'}
                    bgRepeat={'no-repeat'}
                    bgSize={'cover'}
                    bgImage={img}
                    w={'full'} h={'40vh'}
                    className="arrow"
                ></Box>
                <Stack className="middle">
                    <MdEdit fontSize={'2rem'} color="white" className="button" />
                </Stack>
            </Stack>
        </>
    )
}

export default ProfileImage