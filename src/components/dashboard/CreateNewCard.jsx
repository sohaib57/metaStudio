import { Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const CreateNewCard = () => {
    const nav = useNavigate()
    return (
        <>
            <Stack
                border={'1px solid '}
                // _hover={{
                //     borderColor: '',
                // }}
                borderRadius={'16px'}
                py={5}
                alignItems={'center'}
                justify={'center'}
                cursor={'pointer'}
                h={'52'}
                onClick={() => nav('/create/blockchain')}
            >
                <AiOutlinePlusCircle size={'1.5em'} />
                <Text>Create New</Text>
            </Stack>
        </>
    )
}

export default CreateNewCard