import React from 'react';
import { Stack, Img, Text } from '@chakra-ui/react';
import LandingPageHeader from '../header/LandingPageHeader';
import Single from '../../assests/images/single.png';
import Multiple from '../../assests/images/multiple.png';
import Footer from '../footer/Footer';
import { useNavigate } from 'react-router-dom';

const TypeComp = () => {
  const nav = useNavigate();
  return (
    <Stack width={'100%'} bgColor={'#282c4b'} pb={'50px'}>
      <LandingPageHeader />

      <Stack px={{ base: 10, md: 40 }}>
        <Text fontSize={{ base: 'lg', sm: '4xl' }} color={'white'}>
          Choose Type
        </Text>
        <Text fontSize={'md'} color={'#ffffff99'}>
          Choose “Single” for one of a kind or “Multiple” if you want to sell
          one collectible multiple times
        </Text>
      </Stack>

      <Stack
        width={'100%'}
        direction={{ base: 'column', lg: 'row' }}
        gap={3}
        px={{ base: 10, md: 40 }}
        py={10}
      >
        <Stack
          onClick={() => nav('/create/upload')}
          border={'1px solid #ffffff1a'}
          _hover={{
            borderColor: '#ffffff33',
          }}
          borderRadius={'full'}
          py={10}
          alignItems={'center'}
          cursor={'pointer'}
          width={{ base: '100%', lg: '30%' }}
        >
          <Img src={Single} height={'80px'} />
          <Text fontSize={'2xl'} color={'white'} py={1}>
            Single
          </Text>
          <Text fontSize={'md'} color={'#ffffff99'} textAlign={'center'} px={4}>
            If you want to highlight the uniqueness and individuality of your
            item
          </Text>
        </Stack>

        <Stack
          onClick={() => nav('/create/upload')}
          border={'1px solid #ffffff1a'}
          _hover={{
            borderColor: '#ffffff33',
          }}
          borderRadius={'full'}
          py={10}
          alignItems={'center'}
          cursor={'pointer'}
          width={{ base: '100%', lg: '30%' }}
        >
          <Img src={Multiple} height={'80px'} />
          <Text fontSize={'2xl'} color={'white'} py={1}>
            Multiple
          </Text>
          <Text fontSize={'md'} color={'#ffffff99'} textAlign={'center'} px={4}>
            If you want to share your NFT with a large number of community
            members
          </Text>
        </Stack>
      </Stack>

      <Footer />
    </Stack>
  );
};

export default TypeComp;
