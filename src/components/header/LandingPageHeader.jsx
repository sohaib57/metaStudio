import React from 'react';
import { Stack, Link, Img, Spacer } from '@chakra-ui/react';
import Logo from '../../assests/images/logo.png';
import SignInModal from '../homeComp/SignInModal';
import { useNavigate } from 'react-router-dom';

const LandingPageHeader = () => {
  const nav = useNavigate();
  return (
    <Stack
      direction={'row'}
      px={10}
      pt={10}
      spacing={10}
      display={{ base: 'none', md: 'inherit', lg: 'inherit' }}
    >
      <Stack>
        <Img
          src={Logo}
          cursor={'pointer'}
          onClick={() => nav('/')}
          width={'100px'}
          position={'relative'}
          top={'-35'}
        />
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
  );
};

export default LandingPageHeader;
