import { Button, Divider, Heading, Select, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import ProfileHeader from '../../header/ProfileHeader'
import Trending1 from '../../../assests/images/trending1.jpg'

import CoverImage from '../../ui/CoverImage'
import ProfileImage from '../../ui/ProfileImage'
import { IoMdShareAlt } from 'react-icons/io'
import NFTListing from './NFTListing'


const name = 'Asad Sheikh'
const text = "0xA8752e8773bCaF04381B69DB560C40760BB3A45f"
const Following = 1
const Follower = 1
const ProfileComp = () => {
    return (
        <>
            <Stack minH={'100vh'} bgColor={'#F2F2F3'}>
                <ProfileHeader />
                <Stack h={'100%'} m={'0 !Important'}>
                    <Stack minH={'100%'} w={'full'} pb={{ base: '4', md: '0' }} >
                        {/* background image */}
                        <CoverImage img={Trending1} />
                        {/* User Details */}
                        <Stack direction={{ base: 'column', md: 'row' }} px={'6'} pb={'8'} >
                            {/* User Image  */}
                            <Stack align={'center'}>
                                <ProfileImage img={Trending1} />
                            </Stack>
                            {/* User Detail */}
                            <Stack align={{ base: 'center', md: 'initial' }} pt={{ base: '2', md: '0' }} pl={{ base: '0', md: '6' }} w={'full'}>
                                <Stack direction={{ base: 'column', md: 'row' }} justify={{ base: 'center', md: 'space-between' }} w={'full'} align={{ base: 'center', md: 'inherit' }} pt={'4'}>
                                    {/* Name and Address */}
                                    <Stack className='test' align={{ base: 'center', md: 'inherit' }}>
                                        <Heading fontSize={'x-large'} textTransform={'uppercase'} >{name}</Heading>
                                        <Stack direction={'row'} align={'center'} justify={'space-between'}>
                                            <Stack direction={'row'} align={'center'}>
                                                <h6>
                                                    {`Account: ${text.substring(0, 20)}.....`}
                                                </h6>
                                            </Stack>
                                        </Stack>
                                        {/* Edit Profile */}
                                        <Stack direction={'row'} display={{ base: 'none', md: 'inherit' }}>
                                            <Button w={{ md: 'fit-content' }}
                                                _focus={{}}
                                                _active={{}}
                                                borderRadius={'lg'}
                                                bgColor={'white'}
                                                boxShadow={'0px 0px 2px #ccc, 0px 0px 9px 0px #ccc'}
                                            >
                                                Edit Profile
                                            </Button>
                                            <Button w={{ md: 'fit-content' }}
                                                _focus={{}}
                                                _active={{}}
                                                borderRadius={'lg'}
                                                bgColor={'white'}
                                                boxShadow={'0px 0px 2px #ccc, 0px 0px 9px 0px #ccc'}
                                            >
                                                <IoMdShareAlt />
                                            </Button>
                                        </Stack>
                                    </Stack>
                                    {/* Follow and Accounts */}
                                    <Stack border={'1px solid #b1bad3'}
                                        w={{ base: 'full', md: '30vw' }}
                                        borderRadius={'lg'}
                                        justify={'center'}
                                        px={'6'}
                                        py={'6'}
                                        bgColor={'white'}
                                        boxShadow={'0px 0px 2px #ccc, 0px 0px 9px 0px #ccc'}
                                    >

                                        {/* Followers Status */}
                                        <Stack>
                                            <Stack direction={'row'} justify={'space-between'}>
                                                <Text>Following</Text>
                                                <Text>{Following}</Text>
                                            </Stack>
                                            <Stack direction={'row'} justify={'space-between'}>
                                                <Text>Followers</Text>
                                                <Text>{Follower}</Text>
                                            </Stack>
                                        </Stack>
                                        <Divider />
                                        <Stack direction={'row'} justify={'space-between'} align={'center'}>
                                            <Text>Address</Text>
                                            <Select defaultValue={text} w={'40%'} _focus={{}} _active={{}} border={'none'}>
                                                <option value={text}>{text}</option>
                                                <option value={text}>{text}</option>
                                                <option value={text}>{text}</option>
                                            </Select>
                                        </Stack>
                                    </Stack>
                                </Stack>
                                {/* Edit Profile */}
                            </Stack>
                            {/* Edit Profile */}
                            <Stack direction={'row'} display={{ base: 'inherit', md: 'none' }}>
                                <Button w={{ md: 'fit-content' }}
                                    _focus={{}}
                                    _active={{}}
                                    borderRadius={'lg'}
                                    bgColor={'white'}
                                    boxShadow={'0px 0px 2px #ccc, 0px 0px 9px 0px #ccc'}
                                >
                                    Edit Profile
                                </Button>
                                <Button w={{ md: 'fit-content' }}
                                    _focus={{}}
                                    _active={{}}
                                    borderRadius={'lg'}
                                    bgColor={'white'}
                                    boxShadow={'0px 0px 2px #ccc, 0px 0px 9px 0px #ccc'}
                                >
                                    <IoMdShareAlt />
                                </Button>
                            </Stack>
                        </Stack>
                        {/* Tab Section */}
                        <Stack px={'6'}>
                            <Tabs>
                                <TabList>
                                    <Tab>Owned</Tab>
                                    <Tab>Created</Tab>
                                    <Tab>Favourited</Tab>
                                    <Tab>Collections</Tab>
                                </TabList>

                                <TabPanels>
                                    <TabPanel>
                                        <NFTListing />
                                    </TabPanel>
                                    <TabPanel>
                                        <p>two!</p>
                                    </TabPanel>
                                    <TabPanel>
                                        <p>three!</p>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}

export default ProfileComp