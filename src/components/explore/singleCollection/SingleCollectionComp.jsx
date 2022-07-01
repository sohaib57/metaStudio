import { Avatar, Button, Divider, Heading, Img, SimpleGrid, Stack, Tag, Text, chakra } from '@chakra-ui/react'
import React from 'react'
import ProfileHeader from '../../header/ProfileHeader'
import Trending1 from '../../../assests/images/trending1.jpg'
import Trending2 from '../../../assests/images/trending2.png'
import Trending3 from '../../../assests/images/trending3.png'
import { IoIosStarOutline, IoMdHeartEmpty } from 'react-icons/io'
import { FaFire } from 'react-icons/fa'
import '../TabSection.css'
import CollectionHeader from '../collectionHeader/CollectionHeader'
import CollectionSider from '../collectionSider/CollectionSider'

const arts = 3
const collections = 1
const total_value = 30
const likes = 32
const perValue = 0.09
const SingleCollectionComp = () => {
    return (
        <>
            <Stack minH={'100vh'} bgColor={'#F2F2F3'}>

                <ProfileHeader />
                <Stack h={'100%'} m={'0 !Important'}>
                    <Stack minH={'100%'} w={'full'} pb={{ base: '4', md: '0' }} >
                        <Stack w={'full'} h={'40vh'} bgImage={Trending1} bgPos={'center'} bgRepeat={'no-repeat'} bgSize={'cover'} />
                        {/* User Details */}
                        <Stack direction={{ base: 'column', md: 'row' }} spacing={'10'} px={'6'} pb={'8'} >
                            {/* User Image  */}
                            <Stack align={'center'}>
                                <Img src={Trending1} w={'52'} border={'2px solid white'} borderRadius={'lg'} marginTop={'-20'} />

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

                    <CollectionHeader />



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
                                <Stack className='container' borderRadius={'lg'} h={'30rem'} align={'center'} p={'2'}>
                                    <Stack className='card' bgImage={Trending1} bgRepeat={'no-repeat'} bgPosition={'center'} bgSize={'cover'} h={'70%'} w={'90%'} borderRadius={'lg'} align={'end'} pr={'2'} pt={'1'}>
                                        <Button borderRadius={'full'} color={'white'} bg={'rgba(131, 149, 167,0.3)'} _hover={{ bgColor: 'rgba(131, 149, 167,1.0)' }} w={'fit-content'} ><IoMdHeartEmpty size={'1em'} /></Button>
                                    </Stack>
                                    <Stack h={'30%'} margin={'0 !Important'} py={'3'} w={'90%'}>
                                        {/* Title  and Price*/}
                                        <Stack direction={'row'} justify={'space-between'} align={'baseline'}>
                                            <Heading fontSize={'md'} color={'#353840'}>Dog Lover/Loser</Heading>
                                            <Heading fontSize={'sm'} color={'#647CBE'} textTransform={'uppercase'}>{0.003} WEth</Heading>
                                        </Stack>
                                        <Stack w={'100%'} borderBottom={'1px solid'} pb={'2'}>
                                            <Tag w={'fit-content'} cursor='pointer' bgColor={'transparent'} p={'0 !Important'} pt={'2'}>
                                                <Avatar name='user' src={Trending1} size={'xs'} border={'transparent'} />
                                                <Text pl={'2'}>@user1</Text>
                                            </Tag>
                                        </Stack>
                                        <Stack direction={'row'} color={'#647CBE'} align={'baseline'} justify={'space-between'}>
                                            <Text fontSize={'xs'}>Highest Bid: <chakra.span fontWeight={'bold'}>{perValue} WETH</chakra.span></Text>
                                            <Button size={'sm'} variant={'ghost'} _hover={{ bgColor: 'inherit' }} _focus={{}} _active={{}} rightIcon={<FaFire />}>New Bid</Button>
                                        </Stack>
                                    </Stack>
                                </Stack>
                                {/* Card */}
                                <Stack className='container' borderRadius={'lg'} h={'30rem'} align={'center'} p={'2'}>
                                    <Stack className='card' bgImage={Trending2} bgRepeat={'no-repeat'} bgPosition={'center'} bgSize={'cover'} h={'70%'} w={'90%'} borderRadius={'lg'} align={'end'} pr={'2'} pt={'1'}>
                                        <Button borderRadius={'full'} color={'white'} bg={'rgba(131, 149, 167,0.3)'} _hover={{ bgColor: 'rgba(131, 149, 167,1.0)' }} w={'fit-content'} ><IoMdHeartEmpty size={'1em'} /></Button>
                                    </Stack>
                                    <Stack h={'30%'} margin={'0 !Important'} py={'3'} w={'90%'}>
                                        {/* Title  and Price*/}
                                        <Stack direction={'row'} justify={'space-between'} align={'baseline'}>
                                            <Heading fontSize={'md'} >Dog Lover/Loser</Heading>
                                            <Heading fontSize={'sm'} color={'#647CBE'} textTransform={'uppercase'}>{0.003} WEth</Heading>
                                        </Stack>
                                        <Stack w={'100%'} borderBottom={'1px solid'} pb={'2'}>
                                            <Tag w={'fit-content'} cursor='pointer' bgColor={'transparent'} p={'0 !Important'} pt={'2'}>
                                                <Avatar name='user' src={Trending1} size={'xs'} border={'transparent'} />
                                                <Text pl={'2'}>@user1</Text>
                                            </Tag>
                                        </Stack>
                                        <Stack direction={'row'} color={'#647CBE'} align={'baseline'} justify={'space-between'}>
                                            <Text fontSize={'xs'}>Highest Bid: <chakra.span fontWeight={'bold'}>{perValue} WETH</chakra.span></Text>
                                            <Button size={'sm'} variant={'ghost'} _hover={{ bgColor: 'inherit' }} _focus={{}} _active={{}} rightIcon={<FaFire />}>New Bid</Button>
                                        </Stack>
                                    </Stack>
                                </Stack>
                                {/* Card */}
                                <Stack className='container' borderRadius={'lg'} h={'30rem'} align={'center'} p={'2'}>
                                    <Stack className='card' bgImage={Trending3} bgRepeat={'no-repeat'} bgPosition={'center'} bgSize={'cover'} h={'70%'} w={'90%'} borderRadius={'lg'} align={'end'} pr={'2'} pt={'1'}>
                                        <Button borderRadius={'full'} color={'white'} bg={'rgba(131, 149, 167,0.3)'} _hover={{ bgColor: 'rgba(131, 149, 167,1.0)' }} w={'fit-content'} ><IoMdHeartEmpty size={'1em'} /></Button>
                                    </Stack>
                                    <Stack h={'30%'} margin={'0 !Important'} py={'3'} w={'90%'}>
                                        {/* Title  and Price*/}
                                        <Stack direction={'row'} justify={'space-between'} align={'baseline'}>
                                            <Heading fontSize={'md'} >Dog Lover/Loser</Heading>
                                            <Heading fontSize={'sm'} color={'#647CBE'} textTransform={'uppercase'}>{0.003} WEth</Heading>
                                        </Stack>
                                        <Stack w={'100%'} borderBottom={'1px solid'} pb={'2'}>
                                            <Tag w={'fit-content'} cursor='pointer' bgColor={'transparent'} p={'0 !Important'} pt={'2'}>
                                                <Avatar name='user' src={Trending1} size={'xs'} border={'transparent'} />
                                                <Text pl={'2'}>@user1</Text>
                                            </Tag>
                                        </Stack>
                                        <Stack direction={'row'} color={'#647CBE'} align={'baseline'} justify={'space-between'}>
                                            <Text fontSize={'xs'}>Highest Bid: <chakra.span fontWeight={'bold'}>{perValue} WETH</chakra.span></Text>
                                            <Button size={'sm'} variant={'ghost'} _hover={{ bgColor: 'inherit' }} _focus={{}} _active={{}} rightIcon={<FaFire />}>New Bid</Button>
                                        </Stack>
                                    </Stack>
                                </Stack>
                                {/* Card */}
                                <Stack className='container' borderRadius={'lg'} h={'30rem'} align={'center'} p={'2'}>
                                    <Stack className='card' bgImage={Trending1} bgRepeat={'no-repeat'} bgPosition={'center'} bgSize={'cover'} h={'70%'} w={'90%'} borderRadius={'lg'} align={'end'} pr={'2'} pt={'1'}>
                                        <Button borderRadius={'full'} color={'white'} bg={'rgba(131, 149, 167,0.3)'} _hover={{ bgColor: 'rgba(131, 149, 167,1.0)' }} w={'fit-content'} ><IoMdHeartEmpty size={'1em'} /></Button>
                                    </Stack>
                                    <Stack h={'30%'} margin={'0 !Important'} py={'3'} w={'90%'}>
                                        {/* Title  and Price*/}
                                        <Stack direction={'row'} justify={'space-between'} align={'baseline'}>
                                            <Heading fontSize={'md'} >Dog Lover/Loser</Heading>
                                            <Heading fontSize={'sm'} color={'#647CBE'} textTransform={'uppercase'}>{0.003} WEth</Heading>
                                        </Stack>
                                        <Stack w={'100%'} borderBottom={'1px solid'} pb={'2'}>
                                            <Tag w={'fit-content'} cursor='pointer' bgColor={'transparent'} p={'0 !Important'} pt={'2'}>
                                                <Avatar name='user' src={Trending1} size={'xs'} border={'transparent'} />
                                                <Text pl={'2'}>@user1</Text>
                                            </Tag>
                                        </Stack>
                                        <Stack direction={'row'} color={'#647CBE'} align={'baseline'} justify={'space-between'}>
                                            <Text fontSize={'xs'}>Highest Bid: <chakra.span fontWeight={'bold'}>{perValue} WETH</chakra.span></Text>
                                            <Button size={'sm'} variant={'ghost'} _hover={{ bgColor: 'inherit' }} _focus={{}} _active={{}} rightIcon={<FaFire />}>New Bid</Button>
                                        </Stack>
                                    </Stack>
                                </Stack>
                                {/* Card */}
                                <Stack className='container' borderRadius={'lg'} h={'30rem'} align={'center'} p={'2'}>
                                    <Stack className='card' bgImage={Trending2} bgRepeat={'no-repeat'} bgPosition={'center'} bgSize={'cover'} h={'70%'} w={'90%'} borderRadius={'lg'} align={'end'} pr={'2'} pt={'1'}>
                                        <Button borderRadius={'full'} color={'white'} bg={'rgba(131, 149, 167,0.3)'} _hover={{ bgColor: 'rgba(131, 149, 167,1.0)' }} w={'fit-content'} ><IoMdHeartEmpty size={'1em'} /></Button>
                                    </Stack>
                                    <Stack h={'30%'} margin={'0 !Important'} py={'3'} w={'90%'}>
                                        {/* Title  and Price*/}
                                        <Stack direction={'row'} justify={'space-between'} align={'baseline'}>
                                            <Heading fontSize={'md'} >Dog Lover/Loser</Heading>
                                            <Heading fontSize={'sm'} color={'#647CBE'} textTransform={'uppercase'}>{0.003} WEth</Heading>
                                        </Stack>
                                        <Stack w={'100%'} borderBottom={'1px solid'} pb={'2'}>
                                            <Tag w={'fit-content'} cursor='pointer' bgColor={'transparent'} p={'0 !Important'} pt={'2'}>
                                                <Avatar name='user' src={Trending1} size={'xs'} border={'transparent'} />
                                                <Text pl={'2'}>@user1</Text>
                                            </Tag>
                                        </Stack>
                                        <Stack direction={'row'} color={'#647CBE'} align={'baseline'} justify={'space-between'}>
                                            <Text fontSize={'xs'}>Highest Bid: <chakra.span fontWeight={'bold'}>{perValue} WETH</chakra.span></Text>
                                            <Button size={'sm'} variant={'ghost'} _hover={{ bgColor: 'inherit' }} _focus={{}} _active={{}} rightIcon={<FaFire />}>New Bid</Button>
                                        </Stack>
                                    </Stack>
                                </Stack>
                                {/* Card */}
                                <Stack className='container' borderRadius={'lg'} h={'30rem'} align={'center'} p={'2'}>
                                    <Stack className='card' bgImage={Trending3} bgRepeat={'no-repeat'} bgPosition={'center'} bgSize={'cover'} h={'70%'} w={'90%'} borderRadius={'lg'} align={'end'} pr={'2'} pt={'1'}>
                                        <Button borderRadius={'full'} color={'white'} bg={'rgba(131, 149, 167,0.3)'} _hover={{ bgColor: 'rgba(131, 149, 167,1.0)' }} w={'fit-content'} ><IoMdHeartEmpty size={'1em'} /></Button>
                                    </Stack>
                                    <Stack h={'30%'} margin={'0 !Important'} py={'3'} w={'90%'}>
                                        {/* Title  and Price*/}
                                        <Stack direction={'row'} justify={'space-between'} align={'baseline'}>
                                            <Heading fontSize={'md'} >Dog Lover/Loser</Heading>
                                            <Heading fontSize={'sm'} color={'#647CBE'} textTransform={'uppercase'}>{0.003} WEth</Heading>
                                        </Stack>
                                        <Stack w={'100%'} borderBottom={'1px solid'} pb={'2'}>
                                            <Tag w={'fit-content'} cursor='pointer' bgColor={'transparent'} p={'0 !Important'} pt={'2'}>
                                                <Avatar name='user' src={Trending1} size={'xs'} border={'transparent'} />
                                                <Text pl={'2'}>@user1</Text>
                                            </Tag>
                                        </Stack>
                                        <Stack direction={'row'} color={'#647CBE'} align={'baseline'} justify={'space-between'}>
                                            <Text fontSize={'xs'}>Highest Bid: <chakra.span fontWeight={'bold'}>{perValue} WETH</chakra.span></Text>
                                            <Button size={'sm'} variant={'ghost'} _hover={{ bgColor: 'inherit' }} _focus={{}} _active={{}} rightIcon={<FaFire />}>New Bid</Button>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </SimpleGrid>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}

export default SingleCollectionComp