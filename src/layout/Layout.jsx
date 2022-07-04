import React from 'react';
import { Stack } from '@chakra-ui/react';
import ProfileHeader from '../components/header/ProfileHeader';
import Footer from '../components/footer/Footer'

const Layout = ({ children }) => {
  return (
    <Stack width={'full'}>
      <ProfileHeader />
      {children}
      <Footer />
    </Stack>
  );
};

export default Layout;
