import { Img, Stack } from '@chakra-ui/react';
import React from 'react';
// import Wallet from '../objects/Wallet';
import logo from '../../assests/images/logo.png';
import Profile from '../objects/Profile';
import { useNavigate } from 'react-router-dom';

const ProfileHeader = () => {
  const nav = useNavigate();
  return (
    <>
      <Stack
        className="Header-Stack"
        minH={'16'}
        bgColor={'#001529'}
        align={'center'}
        px={'3'}
        direction={'row'}
        justify={'end'}
        boxShadow={'rgb(0 0 0 / 79%) 0px 5px 12px 0px'}
      >
        <Img
          cursor={'pointer'}
          src={logo}
          onClick={() => nav('/')}
          position={'absolute'}
          left={'1'}
          boxSize={'36'}
        />
        <Stack direction={'row'} className="Header-Buttons-Stack">
          <Profile />
          {/* <Wallet /> */}
        </Stack>
      </Stack>
    </>
  );
};

export default ProfileHeader;
