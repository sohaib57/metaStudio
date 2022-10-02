import { Button, Icon, IconButton, Menu, MenuButton, MenuItem, MenuList, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { BsPersonFill } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const nav = useNavigate()

    return (
        <>
            <Menu autoSelect='false'>
                <MenuButton
                    onClick={onOpen}
                    as={IconButton} variant={'ghost'}
                    color={'white'}
                    _hover={{ color: 'white' }}
                    _focus={{}}
                    _active={{}}
                    icon={<CgProfile size={'1.5rem'} />} />
                <MenuList bgColor={'#001529'} border={'none'} color={'white'} p={'2'}>
                    <MenuItem borderRadius={'lg'} _focus={{}} _hover={{ bgColor: '#F2F2F3', color: 'black', borderRadius: 'lg', fontWeight: 'bold' }} onClick={() => nav('/account')}>My Profile</MenuItem>
                    <MenuItem borderRadius={'lg'} _focus={{}} _hover={{ bgColor: '#F2F2F3', color: 'black', borderRadius: 'lg', fontWeight: 'bold' }}>Create a Copy</MenuItem>
                    <MenuItem borderRadius={'lg'} _focus={{}} _hover={{ bgColor: '#F2F2F3', color: 'black', borderRadius: 'lg', fontWeight: 'bold' }}>Mark as Draft</MenuItem>
                    <MenuItem borderRadius={'lg'} _focus={{}} _hover={{ bgColor: '#F2F2F3', color: 'black', borderRadius: 'lg', fontWeight: 'bold' }}>Delete</MenuItem>
                    <MenuItem borderRadius={'lg'} _focus={{}} _hover={{ bgColor: '#F2F2F3', color: 'black', borderRadius: 'lg', fontWeight: 'bold' }} onClick={() => nav('/settings')}>Settings</MenuItem>
                </MenuList>
            </Menu>
        </>
    )
}

export default Profile