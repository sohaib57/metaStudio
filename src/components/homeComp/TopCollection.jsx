import React from 'react';
import {
  Button,
  Stack,
  Text,
  Divider,
  HStack,
  Avatar,
  Img,
  Spacer,
} from '@chakra-ui/react';
import Eth from '../../assests/images/eth.svg';
import gif1 from '../../assests/images/original.gif';
import gif2 from '../../assests/images/original1.gif';
import gif3 from '../../assests/images/original3.png';
import gif4 from '../../assests/images/original2.jpeg';
import gif5 from '../../assests/images/original4.gif';
import gif6 from '../../assests/images/original5.gif';
import gif7 from '../../assests/images/original7.gif';
import { useNavigate } from 'react-router-dom'

const TopCollection = () => {
  const nav = useNavigate()
  return (
    <Stack>
    <Stack width={'100%'} py={5} bgColor={'#f2f2f3'}>
      <Stack alignItems={'center'}>
        <Text
          textAlign={'center'}
          fontSize={'3xl'}
          fontWeight={'700'}
          fontFamily={'sans-serif'}
        >
          Top Collections
        </Text>
        <Divider borderColor={'#001529'} width={'10%'} />
      </Stack>

      <Stack
        width={'100%'}
        direction={{ base: 'column', lg: 'row' }}
        px={{ base: 10, md: 20 }}
        justifyContent={'center'}
        gap={10}
        py={8}
      >
        <Stack direction={'column'} width={{ base: '100%', xl: '50%' }}>
          <Stack gap={2}>
            <Stack
            cursor={'pointer'}
              direction={{base:'column',md:'row'}}
              px={{ base: 0, md: 20, lg: 4 }}
              py={'4'}
              _hover={{
                boxShadow: 'md',
                bgColor: 'white',
                rounded: 'md',
              }}
              onClick={() => nav('/explore/collection/user1')}
            >
              <Stack  direction={'row'}>
              <Stack direction={'row'} alignItems={'center'} gap={1}>
                <Text
                  fontSize={'lg'}
                  fontWeight={'700'}
                  justifyContent={'center'}
                >
                  1
                </Text>
                <Avatar
                  size={'md'}
                  name="Dan Abrahmov"
                  src="https://openseauserdata.com/files/061eb8949cff84d0be850fc9a566e4fe.png"
                />
              </Stack>
              <Stack lineHeight={1}>
                <Text fontSize={'md'} fontWeight={'700'}>
                  Bored Ape
                </Text>
                <HStack>
                  <Text fontSize={'sm'} fontWeight={'500'} color={'#707a83'}>
                    Floor price:
                  </Text>
                  <Img src={Eth} width={'14px'} height={'15px'} />
                  <Text fontSize={'sm'} fontWeight={'700'} color={'#707a83'}>
                    89.85
                  </Text>
                </HStack>
              </Stack>
              </Stack>
              <Spacer />
              <Stack lineHeight={1} >
                <Text
                  fontSize={'sm'}
                  fontWeight={'500'}
                  color={'#eb5757'}
                  textAlign={'right'}
                >
                  -42.50%
                </Text>
                <HStack justifyContent={'right'}>
                  <Img src={Eth} width={'14px'} height={'15px'} />
                  <Text fontSize={'sm'} fontWeight={'700'} color={'#707a83'}>
                    6,901.63
                  </Text>
                </HStack>
              </Stack>
            </Stack>
            <Divider borderColor={'gray'} />
            <Stack
            cursor={'pointer'}
              direction={{base:'column',md:'row'}}
              px={{ base: 0, md: 20, lg: 4 }}
              py={'4'}
              _hover={{
                boxShadow: 'md',
                bgColor: 'white',
                rounded: 'md',
              }}
              onClick={() => nav('/explore/collection/user1')}
            >
              <Stack  direction={'row'}>
              <Stack direction={'row'} alignItems={'center'} gap={1}>
                <Text
                  fontSize={'lg'}
                  fontWeight={'700'}
                  justifyContent={'center'}
                >
                  2
                </Text>
                <Avatar
                  size={'md'}
                  name="Dan Abrahmov"
                  src={gif1}
                />
              </Stack>
              <Stack lineHeight={1}>
                <Text fontSize={'md'} fontWeight={'700'}>
                  Bored Ape
                </Text>
                <HStack>
                  <Text fontSize={'sm'} fontWeight={'500'} color={'#707a83'}>
                    Floor price:
                  </Text>
                  <Img src={Eth} width={'14px'} height={'15px'} />
                  <Text fontSize={'sm'} fontWeight={'700'} color={'#707a83'}>
                    89.85
                  </Text>
                </HStack>
              </Stack>
              </Stack>
              <Spacer />
              <Stack lineHeight={1} >
                <Text
                  fontSize={'sm'}
                  fontWeight={'500'}
                  color={'#eb5757'}
                  textAlign={'right'}
                >
                  -42.50%
                </Text>
                <HStack justifyContent={'right'}>
                  <Img src={Eth} width={'14px'} height={'15px'} />
                  <Text fontSize={'sm'} fontWeight={'700'} color={'#707a83'}>
                    6,901.63
                  </Text>
                </HStack>
              </Stack>
            </Stack>
            <Divider borderColor={'gray'} />
            <Stack
            cursor={'pointer'}
              direction={{base:'column',md:'row'}}
              px={{ base: 0, md: 20, lg: 4 }}
              py={'4'}
              _hover={{
                boxShadow: 'md',
                bgColor: 'white',
                rounded: 'md',
              }}
              onClick={() => nav('/explore/collection/user1')}
            >
              <Stack  direction={'row'}>
              <Stack direction={'row'} alignItems={'center'} gap={1}>
                <Text
                  fontSize={'lg'}
                  fontWeight={'700'}
                  justifyContent={'center'}
                >
                  3
                </Text>
                <Avatar
                  size={'md'}
                  name="Dan Abrahmov"
                  src={gif2}
                />
              </Stack>
              <Stack lineHeight={1}>
                <Text fontSize={'md'} fontWeight={'700'}>
                  Bored Ape
                </Text>
                <HStack>
                  <Text fontSize={'sm'} fontWeight={'500'} color={'#707a83'}>
                    Floor price:
                  </Text>
                  <Img src={Eth} width={'14px'} height={'15px'} />
                  <Text fontSize={'sm'} fontWeight={'700'} color={'#707a83'}>
                    89.85
                  </Text>
                </HStack>
              </Stack>
              </Stack>
              <Spacer />
              <Stack lineHeight={1} >
                <Text
                  fontSize={'sm'}
                  fontWeight={'500'}
                  color={'#eb5757'}
                  textAlign={'right'}
                >
                  -42.50%
                </Text>
                <HStack justifyContent={'right'}>
                  <Img src={Eth} width={'14px'} height={'15px'} />
                  <Text fontSize={'sm'} fontWeight={'700'} color={'#707a83'}>
                    6,901.63
                  </Text>
                </HStack>
              </Stack>
            </Stack>
            <Divider borderColor={'gray'} />
            <Stack
            cursor={'pointer'}
              direction={{base:'column',md:'row'}}
              px={{ base: 0, md: 20, lg: 4 }}
              py={'4'}
              _hover={{
                boxShadow: 'md',
                bgColor: 'white',
                rounded: 'md',
              }}
              onClick={() => nav('/explore/collection/user1')}
            >
              <Stack  direction={'row'}>
              <Stack direction={'row'} alignItems={'center'} gap={1}>
                <Text
                  fontSize={'lg'}
                  fontWeight={'700'}
                  justifyContent={'center'}
                >
                  4
                </Text>
                <Avatar
                  size={'md'}
                  name="Dan Abrahmov"
                  src={gif3}
                />
              </Stack>
              <Stack lineHeight={1}>
                <Text fontSize={'md'} fontWeight={'700'}>
                  Bored Ape
                </Text>
                <HStack>
                  <Text fontSize={'sm'} fontWeight={'500'} color={'#707a83'}>
                    Floor price:
                  </Text>
                  <Img src={Eth} width={'14px'} height={'15px'} />
                  <Text fontSize={'sm'} fontWeight={'700'} color={'#707a83'}>
                    89.85
                  </Text>
                </HStack>
              </Stack>
              </Stack>
              <Spacer />
              <Stack lineHeight={1} >
                <Text
                  fontSize={'sm'}
                  fontWeight={'500'}
                  color={'#eb5757'}
                  textAlign={'right'}
                >
                  -42.50%
                </Text>
                <HStack justifyContent={'right'}>
                  <Img src={Eth} width={'14px'} height={'15px'} />
                  <Text fontSize={'sm'} fontWeight={'700'} color={'#707a83'}>
                    6,901.63
                  </Text>
                </HStack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        <Stack direction={'column'} width={{ base: '100%', xl: '50%' }}>
          <Stack gap={2}>
          <Stack
            cursor={'pointer'}
              direction={{base:'column',md:'row'}}
              px={{ base: 0, md: 20, lg: 4 }}
              py={'4'}
              _hover={{
                boxShadow: 'md',
                bgColor: 'white',
                rounded: 'md',
              }}
              onClick={() => nav('/explore/collection/user1')}
            >
              <Stack  direction={'row'}>
              <Stack direction={'row'} alignItems={'center'} gap={1}>
                <Text
                  fontSize={'lg'}
                  fontWeight={'700'}
                  justifyContent={'center'}
                >
                  5
                </Text>
                <Avatar
                  size={'md'}
                  name="Dan Abrahmov"
                  src={gif4}
                />
              </Stack>
              <Stack lineHeight={1}>
                <Text fontSize={'md'} fontWeight={'700'}>
                  Bored Ape
                </Text>
                <HStack>
                  <Text fontSize={'sm'} fontWeight={'500'} color={'#707a83'}>
                    Floor price:
                  </Text>
                  <Img src={Eth} width={'14px'} height={'15px'} />
                  <Text fontSize={'sm'} fontWeight={'700'} color={'#707a83'}>
                    89.85
                  </Text>
                </HStack>
              </Stack>
              </Stack>
              <Spacer />
              <Stack lineHeight={1} >
                <Text
                  fontSize={'sm'}
                  fontWeight={'500'}
                  color={'#eb5757'}
                  textAlign={'right'}
                >
                  -42.50%
                </Text>
                <HStack justifyContent={'right'}>
                  <Img src={Eth} width={'14px'} height={'15px'} />
                  <Text fontSize={'sm'} fontWeight={'700'} color={'#707a83'}>
                    6,901.63
                  </Text>
                </HStack>
              </Stack>
            </Stack>
            <Divider borderColor={'gray'} />
            <Stack
            cursor={'pointer'}
              direction={{base:'column',md:'row'}}
              px={{ base: 0, md: 20, lg: 4 }}
              py={'4'}
              _hover={{
                boxShadow: 'md',
                bgColor: 'white',
                rounded: 'md',
              }}
              onClick={() => nav('/explore/collection/user1')}
            >
              <Stack  direction={'row'}>
              <Stack direction={'row'} alignItems={'center'} gap={1}>
                <Text
                  fontSize={'lg'}
                  fontWeight={'700'}
                  justifyContent={'center'}
                >
                  6
                </Text>
                <Avatar
                  size={'md'}
                  name="Dan Abrahmov"
                  src={gif5}
                />
              </Stack>
              <Stack lineHeight={1}>
                <Text fontSize={'md'} fontWeight={'700'}>
                  Bored Ape
                </Text>
                <HStack>
                  <Text fontSize={'sm'} fontWeight={'500'} color={'#707a83'}>
                    Floor price:
                  </Text>
                  <Img src={Eth} width={'14px'} height={'15px'} />
                  <Text fontSize={'sm'} fontWeight={'700'} color={'#707a83'}>
                    89.85
                  </Text>
                </HStack>
              </Stack>
              </Stack>
              <Spacer />
              <Stack lineHeight={1} >
                <Text
                  fontSize={'sm'}
                  fontWeight={'500'}
                  color={'#eb5757'}
                  textAlign={'right'}
                >
                  -42.50%
                </Text>
                <HStack justifyContent={'right'}>
                  <Img src={Eth} width={'14px'} height={'15px'} />
                  <Text fontSize={'sm'} fontWeight={'700'} color={'#707a83'}>
                    6,901.63
                  </Text>
                </HStack>
              </Stack>
            </Stack>
            <Divider borderColor={'gray'} />
            <Stack
            cursor={'pointer'}
              direction={{base:'column',md:'row'}}
              px={{ base: 0, md: 20, lg: 4 }}
              py={'4'}
              _hover={{
                boxShadow: 'md',
                bgColor: 'white',
                rounded: 'md',
              }}
              onClick={() => nav('/explore/collection/user1')}
            >
              <Stack  direction={'row'}>
              <Stack direction={'row'} alignItems={'center'} gap={1}>
                <Text
                  fontSize={'lg'}
                  fontWeight={'700'}
                  justifyContent={'center'}
                >
                  7
                </Text>
                <Avatar
                  size={'md'}
                  name="Dan Abrahmov"
                  src={gif6}
                />
              </Stack>
              <Stack lineHeight={1}>
                <Text fontSize={'md'} fontWeight={'700'}>
                  Bored Ape
                </Text>
                <HStack>
                  <Text fontSize={'sm'} fontWeight={'500'} color={'#707a83'}>
                    Floor price:
                  </Text>
                  <Img src={Eth} width={'14px'} height={'15px'} />
                  <Text fontSize={'sm'} fontWeight={'700'} color={'#707a83'}>
                    89.85
                  </Text>
                </HStack>
              </Stack>
              </Stack>
              <Spacer />
              <Stack lineHeight={1} >
                <Text
                  fontSize={'sm'}
                  fontWeight={'500'}
                  color={'#eb5757'}
                  textAlign={'right'}
                >
                  -42.50%
                </Text>
                <HStack justifyContent={'right'}>
                  <Img src={Eth} width={'14px'} height={'15px'} />
                  <Text fontSize={'sm'} fontWeight={'700'} color={'#707a83'}>
                    6,901.63
                  </Text>
                </HStack>
              </Stack>
            </Stack>
            <Divider borderColor={'gray'} />
            <Stack
            cursor={'pointer'}
              direction={{base:'column',md:'row'}}
              px={{ base: 0, md: 20, lg: 4 }}
              py={'4'}
              _hover={{
                boxShadow: 'md',
                bgColor: 'white',
                rounded: 'md',
              }}
              onClick={() => nav('/explore/collection/user1')}
            >
              <Stack  direction={'row'}>
              <Stack direction={'row'} alignItems={'center'} gap={1}>
                <Text
                  fontSize={'lg'}
                  fontWeight={'700'}
                  justifyContent={'center'}
                >
                  8
                </Text>
                <Avatar
                  size={'md'}
                  name="Dan Abrahmov"
                  src={gif7}
                />
              </Stack>
              <Stack lineHeight={1}>
                <Text fontSize={'md'} fontWeight={'700'}>
                  Bored Ape
                </Text>
                <HStack>
                  <Text fontSize={'sm'} fontWeight={'500'} color={'#707a83'}>
                    Floor price:
                  </Text>
                  <Img src={Eth} width={'14px'} height={'15px'} />
                  <Text fontSize={'sm'} fontWeight={'700'} color={'#707a83'}>
                    89.85
                  </Text>
                </HStack>
              </Stack>
              </Stack>
              <Spacer />
              <Stack lineHeight={1} >
                <Text
                  fontSize={'sm'}
                  fontWeight={'500'}
                  color={'#eb5757'}
                  textAlign={'right'}
                >
                  -42.50%
                </Text>
                <HStack justifyContent={'right'}>
                  <Img src={Eth} width={'14px'} height={'15px'} />
                  <Text fontSize={'sm'} fontWeight={'700'} color={'#707a83'}>
                    6,901.63
                  </Text>
                </HStack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <Stack pt={2} alignItems={'center'}>
        <Button
          onClick={() => nav('/explore')}
          bgColor={'transparent'}
          borderRadius={'none'}
          border={'1px solid #001529'}
          width={'fit-content'}
          color={'#001529'}
          _hover={{
            border: '1px solid #001529',
            bgColor: 'transparent',
            color: '#001529',
          }}
          _focus={{
            boxShadow: 'none',
          }}
          _active={{}}
        >
          See all collections
        </Button>
      </Stack>
    </Stack>
    </Stack>
  );
};

export default TopCollection;
