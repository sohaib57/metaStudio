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
      spacing={10}
      px={'4'}
      display={{ base: 'none', md: 'inherit', lg: 'inherit' }}
      align={'center'}
    >
      <Stack>
        <Img
          src={Logo}
          cursor={'pointer'}
          onClick={() => nav('/')}
          width={'100px'}
          position={'relative'}
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
