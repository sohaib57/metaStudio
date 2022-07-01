import React from 'react';
import {
  Stack,
  Link,
  Img,
  Spacer,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react';
import Logo from '../../assests/images/logo.png';
import NFT1 from '../../assests/images/1.jpg';
import NFT2 from '../../assests/images/2.jpg';
import SignInModal from './SignInModal';
import NotableDrops from './NotableDrops';
import { useNavigate } from 'react-router-dom';

const HomeComp = () => {
  const nav = useNavigate();
  return (
    <Stack>
    <Stack width={'100%'} bgColor={'#001529'} pb={'33px'}>
      <Stack direction={'row'} px={10} pt={10} spacing={10}>
        <Stack>
          <Img src={Logo} width={'100px'} position={'relative'} top={'-35'} />
        </Stack>

        <Link
          fontSize={'md'}
          fontWeight={'600'}
          color={'white'}
          _hover={{
            textDecoration: 'none',
            color: 'white',
          }}
        >
          Market
        </Link>
        <Link
          fontSize={'md'}
          fontWeight={'600'}
          color={'white'}
          _hover={{
            textDecoration: 'none',
            color: 'white',
          }}
        >
          Community
        </Link>
        <Link
          fontSize={'md'}
          fontWeight={'600'}
          color={'white'}
          _hover={{
            textDecoration: 'none',
            color: 'white',
          }}
        >
          Blogs
        </Link>
        <Link
          fontSize={'md'}
          fontWeight={'600'}
          color={'white'}
          _hover={{
            textDecoration: 'none',
            color: 'white',
          }}
        >
          About Us
        </Link>
        <Spacer />

        <SignInModal />
      </Stack>

      <Stack width={'100%'} direction={{ base: 'column', md: 'row' }} px={20}>
        <Stack width={{ base: '100%', md: '50%' }}>
          <Heading color={'white'} fontSize={'7xl'} fontWeight={'600'}>
            Find Your Own Unique digital rarity
          </Heading>
          <Text
            color={'white'}
            fontSize={'sm'}
            width={{ base: '100%', md: '60%' }}
            py={5}
          >
            Explore the best collections from hand-picked digital artists out
            there and find your gem.
          </Text>
          <Stack py={3} direction={'row'} gap={4}>
            <Button
              onClick={() => nav('/editor')}
              bgColor={'transparent'}
              borderRadius={'none'}
              border={'1px solid white'}
              width={'fit-content'}
              color={'white'}
              _hover={{
                border: '1px solid white',
                bgColor: 'transparent',
                color: 'white',
              }}
              _focus={{
                boxShadow: 'none',
              }}
              _active={{}}
            >
              Explore
            </Button>
            <Button
              bgColor={'transparent'}
              borderRadius={'none'}
              border={'1px solid white'}
              width={'fit-content'}
              color={'white'}
              _hover={{
                border: '1px solid white',
                bgColor: 'transparent',
                color: 'white',
              }}
              _focus={{
                boxShadow: 'none',
              }}
              _active={{}}
            >
              Create
            </Button>
          </Stack>
        </Stack>
        <Stack width={{ base: '100%', md: '50%' }} direction={'row'}>
          <Stack width={{ base: '100%', md: '100%' }} justifyContent={'center'}>
            <Img
              src={NFT2}
              borderRadius="full"
              boxSize="250px"
              p={3}
              border={'1px solid #205375'}
            />
          </Stack>
          <Stack width={{ base: '100%', md: '100%' }} gap={4}>
            <Img
              src={NFT1}
              borderRadius="full"
              boxSize="210px"
              p={3}
              border={'1px solid #205375'}
            />
            <Img
              src={NFT1}
              borderRadius="full"
              boxSize="210px"
              p={3}
              border={'1px solid #205375'}
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
    <NotableDrops/>
    </Stack>
  );
};

export default HomeComp;
