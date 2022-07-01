import { Button, Icon, IconButton, Menu, MenuButton, MenuItem, MenuList, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { BsPersonFill } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'

const Profile = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Menu autoSelect='0'>
                <MenuButton
                    onClick={onOpen}
                    as={IconButton} variant={'ghost'}
                    color={'white'}
                    _hover={{ color: 'white' }}
                    _focus={{}}
                    _active={{}}
                    icon={<CgProfile size={'1.5rem'} />} />
                <MenuList bgColor={'#001529'}>
                    <MenuItem color={'white'} _hover={{ bgColor: '#3876a0', boxShadow: '0px 3px 5px #3876a0, 0px -3px 5px #3876a0' }}>
                        <BsPersonFill />
                        <Text>Your Profile</Text>
                    </MenuItem>
                    <MenuItem color={'white'} _hover={{ bgColor: '#3876a0', boxShadow: '0px 3px 5px #3876a0, 0px -3px 5px #3876a0' }}>Favourites</MenuItem>
                    <MenuItem color={'white'} _hover={{ bgColor: '#3876a0', boxShadow: '0px 3px 5px #3876a0, 0px -3px 5px #3876a0' }}>My Collections</MenuItem>
                    <MenuItem color={'white'} _hover={{ bgColor: '#3876a0', boxShadow: '0px 3px 5px #3876a0, 0px -3px 5px #3876a0' }}>Settings</MenuItem>
                </MenuList>
            </Menu>
        </>
    )
}

export default Profile