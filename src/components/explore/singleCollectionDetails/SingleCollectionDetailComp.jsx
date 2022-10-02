import React from 'react';
import { Stack, Text, Img, Button, HStack, Input } from '@chakra-ui/react';
import Layout from '../../../layout/Layout'
import Trending1 from '../../../assests/images/trending1.jpg';
import Pic from '../../../assests/images/1.jpg';
import Eth from '../../../assests/images/ETHEREUM.svg';
import { FaFire } from 'react-icons/fa';
import { BsFillEyeFill } from 'react-icons/bs';


import { Image } from 'antd';
import './style.css';
import FavoritiesModel from './FavoritiesModel';

const SingleCollectionDetailComp = () => {
  return (
    <Layout>
      <Stack width={'full'} bgColor={'#f2f2f3'} pb={'50px'}>
        <Stack
          width={'100%'}
          direction={{ base: 'column', lg: 'row' }}
          px={{ base: 10, md: 40 }}
          gap={30}
          py={10}
        >
          <Stack width={{ base: '100%', lg: '50%' }} justifyItems={'center'}>
            <Image
              src={Trending1}
              width={{ base: 100, md: 400 }}
              style={{
                borderRadius: 16,
              }}
            />
          </Stack>

          <Stack width={{ base: '100%', lg: '50%' }}>
            <Text color={'black'} fontSize={'2xl'}>
              #1324
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }}>
              <HStack>
                <FaFire color="black" />
                <Text color={'black'}>Highest Bid: 0.09 WETH</Text>
              </HStack>
              <HStack>
                <BsFillEyeFill color="black" />
                <Text color={'black'}>500 views</Text>
              </HStack>
              <FavoritiesModel />
            </Stack>

            <Stack py={5}>
              <Text color={'black'}>
                if you are an NFT investor, this may be the best or worst
                investment of your life. The truth is that there is no roadmap,
                but they say that our private Discord is a madhouse that is not
                recommended to enter if you do not suffer from mental illness.
              </Text>
            </Stack>
            <Stack direction={{ base: 'column', md: 'row' }} gap={{ base: 5, md: 20 }}>
              <Stack>
                <Text color={'black'}>Collection Name</Text>
                <HStack>
                  <Img src={Pic} boxSize={'30px'} borderRadius={'16px'} />
                  <Text color={'black'}>Dog Lover/Loser</Text>
                </HStack>
              </Stack>

              <Stack>
                <Text color={'black'}>Current Owner</Text>
                <HStack>
                  <Img src={Pic} boxSize={'30px'} borderRadius={'16px'} />
                  <Text color={'black'}>0x8275e...3b25</Text>
                </HStack>
              </Stack>
            </Stack>

            <Stack py={4}>
              <Text color={'black'}>Properties</Text>
              <Stack direction={'row'} gap={2} flexWrap={'wrap'}>
                <Stack
                  border={'1px solid black'}
                  _hover={{
                    borderColor: 'black',
                  }}
                  borderRadius={'16px'}
                  py={5}
                  alignItems={'center'}
                  width={{ base: '100%', md: '20%' }}
                  ml={2}
                >
                  <Text color={'black'} fontSize={'xs'}>
                    background
                  </Text>
                  <Text color={'black'}>Blue</Text>
                </Stack>

                <Stack
                  border={'1px solid black'}
                  _hover={{
                    borderColor: 'black',
                  }}
                  borderRadius={'16px'}
                  py={5}
                  alignItems={'center'}
                  width={{ base: '100%', md: '20%' }}
                >
                  <Text color={'black'} fontSize={'xs'}>
                    eye
                  </Text>
                  <Text color={'black'}>White</Text>
                </Stack>

                <Stack
                  border={'1px solid black'}
                  _hover={{
                    borderColor: 'black',
                  }}
                  borderRadius={'16px'}
                  py={5}
                  alignItems={'center'}
                  width={{ base: '100%', md: '20%' }}
                >
                  <Text color={'black'} fontSize={'xs'}>
                    Nose
                  </Text>
                  <Text color={'black'}>White</Text>
                </Stack>

                <Stack
                  border={'1px solid black'}
                  _hover={{
                    borderColor: 'black',
                  }}
                  borderRadius={'16px'}
                  py={5}
                  alignItems={'center'}
                  width={{ base: '100%', md: '20%' }}
                >
                  <Text color={'black'} fontSize={'xs'}>
                    Shirt
                  </Text>
                  <Text color={'black'}>Transparent</Text>
                </Stack>

                <Stack
                  border={'1px solid black'}
                  _hover={{
                    borderColor: 'black',
                  }}
                  borderRadius={'16px'}
                  py={5}
                  alignItems={'center'}
                  width={{ base: '100%', md: '20%' }}
                >
                  <Text color={'black'} fontSize={'xs'}>
                    Skin
                  </Text>
                  <Text color={'black'}>Transparent</Text>
                </Stack>
              </Stack>
            </Stack>

            <Stack>
              <Text color={'black'}>Blockchain</Text>
              <HStack>
                <Img src={Eth} boxSize={'30px'} borderRadius={'16px'} />
                <Text color={'black'}>Ethereum</Text>
              </HStack>
            </Stack>

            <Stack alignItems={'center'}>
              <Button
                bgColor={'transparent'}
                borderRadius={'16px'}
                border={'1px solid black'}
                width={'fit-content'}
                color={'black'}
                _hover={{
                  border: '1px solid black',
                  bgColor: 'transparent',
                  color: 'black',
                }}
                _focus={{
                  boxShadow: 'none',
                }}
                _active={{}}
              >
                Buy for 1.449 ETH
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Layout>
  );
};

export default SingleCollectionDetailComp;
