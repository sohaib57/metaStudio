import { IconButton, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Select, Stack } from '@chakra-ui/react'
import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsFilter } from 'react-icons/bs'
import { MdAddCircleOutline } from 'react-icons/md'
import CollectionSider from '../collectionSider/CollectionSider'

const CollectionHeader = () => {
    return (
        <>

            <Stack direction={'row'} align={{ md: 'end' }} justify={{ base: 'space-between', md: 'end' }}>
                <Stack display={{ base: 'inherit', md: 'none' }}>
                    <Menu >
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<BsFilter />}
                            variant='outline'
                            _focus={{}}
                            _active={{}}
                            borderRadius={'lg'} bgColor={'white'} boxShadow={'0px 0px 2px #ccc, 0px 0px 9px 0px #ccc'}
                        />
                        <MenuList>
                            <CollectionSider />
                        </MenuList>
                    </Menu>
                </Stack>
                <Stack direction={'row'}>
                    <InputGroup>
                        <InputLeftElement pointerEvents={'none'} children={<BiSearch />} />
                        <Input placeholder='Search by name' borderRadius={'lg'} bgColor={'white'} boxShadow={'0px 0px 2px #ccc, 0px 0px 9px 0px #ccc'} />
                    </InputGroup>
                    <Select defaultValue={'pricelowtohigh'} color={'#718096'} borderRadius={'lg'} bgColor={'white'} boxShadow={'0px 0px 2px #ccc, 0px 0px 9px 0px #ccc'}>
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