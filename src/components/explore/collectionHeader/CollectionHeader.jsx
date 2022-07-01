import { IconButton, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Select, Stack } from '@chakra-ui/react'
import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsFilter } from 'react-icons/bs'
import { MdAddCircleOutline } from 'react-icons/md'

const CollectionHeader = () => {
    return (
        <>

            <Stack px={'6'} direction={'row'} justify={{ md: 'end' }} >
                <Stack display={{ base: 'inherit', md: 'none' }}>
                    <Menu >
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<BsFilter />}
                            variant='outline'
                            _focus={{}}
                            _active={{}}
                        />
                        <MenuList>
                            <MenuItem icon={<MdAddCircleOutline />} >
                                New Tab
                            </MenuItem>
                            <MenuItem icon={<MdAddCircleOutline />} >
                                New Window
                            </MenuItem>
                            <MenuItem icon={<MdAddCircleOutline />} >
                                Open Closed Tab
                            </MenuItem>
                            <MenuItem icon={<MdAddCircleOutline />} >
                                Open File...
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Stack>
                <Stack w={{base:'full', md: '50%' }} direction={'row'}>
                    <InputGroup>
                        <InputLeftElement pointerEvents={'none'} children={<BiSearch />} />
                        <Input placeholder='Search by name' />
                    </InputGroup>
                    <Select defaultValue={'pricelowtohigh'}>
                        <option value='pricelowtohigh'>Price Low to High</option>
                        <option value='pricehightolow'>Price High to Low</option>
                        <option value='recentlylisted'>Recently Listed</option>
                    </Select>
                </Stack>
            </Stack>
        </>
    )
}

export default CollectionHeader