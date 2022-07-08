import { Avatar, Button, Divider, Heading, Img, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import ProfileHeader from '../../header/ProfileHeader'
import Trending1 from '../../../assests/images/trending1.jpg'
import { IoIosStarOutline, IoMdHeartEmpty } from 'react-icons/io'
import '../TabSection.css'
import CollectionHeader from '../collectionHeader/CollectionHeader'
import CollectionSider from '../collectionSider/CollectionSider'
import SingleCollectionCard from './SingleCollectionCard'
import CoverImage from '../../ui/CoverImage'
import ProfileImage from '../../ui/ProfileImage'
import Layout from '../../../layout/Layout'


const arts = 3
const collections = 1
const total_value = 30
const likes = 32
const SingleCollectionComp = () => {
    const [showMore, setshowmore] = useState()
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    return (
        <>
            <Layout >
                <Stack minH={'100vh'} bgColor={'#F2F2F3'} className={'test'} m={'0 !Important'}>

                    <Stack h={'100%'} m={'0 !Important'}>
                        <Stack minH={'100%'} w={'full'} pb={{ base: '4', md: '0' }} >
                            <CoverImage img={Trending1} />
                            {/* User Details */}
                            <Stack direction={{ base: 'column', md: 'row' }} spacing={'10'} px={'6'} pb={'8'} >
                                {/* User Image  */}
                                <Stack align={'center'}>
                                    <ProfileImage img={Trending1} />
                                </Stack>
                                {/* User Detail */}
                                <Stack align={{ base: 'center', md: 'initial' }}>
                                    <Stack w={'fit-content'}>
                                        <Heading fontSize={'x-large'} textTransform={'uppercase'} >User collection</Heading>
                                        <Stack direction={'row'} align={'center'} justify={'space-between'}>
                                            <Stack direction={'row'} align={'center'}>
                                                <Avatar size={'sm'} name={'user 1'} src={Trending1} />
                                                <Text textTransform={'uppercase'} color={'#353840'}>user 1</Text>
                                            </Stack>
                                            <Stack direction={'row'} color={'white'}>
                                                <Button size={'xs'} bg={'rgba(131, 149, 167,0.5)'} _hover={{ bgColor: 'rgba(131, 149, 167,1.0)' }} _focus={{}} _active={{}}><IoIosStarOutline /></Button>
                                                <Button size={'xs'} bg={'rgba(131, 149, 167,0.5)'} _hover={{ bgColor: 'rgba(131, 149, 167,1.0)' }} _focus={{}} _active={{}} leftIcon={<IoMdHeartEmpty />}>{likes}</Button>
                                            </Stack>
                                        </Stack>
                                        <Stack direction={'row'} color={'#353840'} align={'center'} fontSize={'sm'} w={'full'} justify={'space-between'}>
                                            <Text>{arts} Arts</Text>
                                            <Divider orientation='vertical' color={'red'} />
                                            <Text>{collections} Collectios</Text>
                                            <Divider orientation='vertical' colorScheme={'blackAlpha'} />
                                            <Text>{total_value}.00k WEth</Text>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                        <Stack direction={{ base: 'column', md: 'row' }} px={'6'} justify={'space-between'}>
                            <Stack w={{ md: '50%' }}>
                                <h6>
                                    {showMore ? text : `${text.substring(0, 100)}.....`}
                                </h6>
                                <Button w={{ md: 'fit-content' }} _focus={{}} _active={{}} borderRadius={'lg'} bgColor={'white'} boxShadow={'0px 0px 2px #ccc, 0px 0px 9px 0px #ccc'} onClick={() => setshowmore(!showMore)}>
                                    {showMore ? "Show Less" : 'Show More'}
                                </Button>
                            </Stack>


                            <CollectionHeader />
                        </Stack>



                        {/* Cards listing */}
                        <Stack pt={'12'} borderTop={'1px solid'} direction={'row'} justify={'space-between'} h={'90vh'}>
                            {/* sider */}
                            <Stack w={'29%'} m={'0 !Important'} position={'sticky'} top={'1.25rem'} display={{ base: 'none', md: 'inherit' }} pl={'2'}>
                                <CollectionSider />
                            </Stack>
                            <Stack w={'full'} m={'0 !Important'} overflow={'auto'} css={{
                                '&::-webkit-scrollbar': {
                                    display: 'none',
                                },
                            }}>
                                <SimpleGrid columns={{ base: '1', md: '2', lg: '3' }} spacing={'1'}>
                                    {/* Card */}
                                    <SingleCollectionCard />
                                    {/* Card */}
                                    <SingleCollectionCard />
                                    {/* Card */}
                                    <SingleCollectionCard />
                                    {/* Card */}
                                    <SingleCollectionCard />
                                    {/* Card */}
                                    <SingleCollectionCard />
                                    {/* Card */}

                                </SimpleGrid>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Layout>
        </>
    )
}

export default SingleCollectionComp