import React from 'react';
import { Stack, Img, Text } from '@chakra-ui/react';
import LandingPageHeader from '../header/LandingPageHeader';
import Ethereum from '../../assests/images/ETHEREUM.svg';
import Flow from '../../assests/images/FLOW.svg';
import Polygon from '../../assests/images/POLYGON.svg';
import Footer from '../footer/Footer';
import { useNavigate } from 'react-router-dom';

const BlockchainComp = () => {
  const nav = useNavigate();
  return (
    <Stack width={'100%'} bgColor={'#282c4b'} pb={'50px'}>
      <LandingPageHeader />

      <Stack px={{ base: 10, md: 40 }}>
        <Text fontSize={{ base: 'lg', sm: '4xl' }} color={'white'}>
          Choose Blockchain
        </Text>
        <Text fontSize={'md'} color={'#ffffff99'}>
          Choose the most suitable blockchain for your needs. You need to
          connect wallet for creation.
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
          onClick={() => nav('/create/start')}
          border={'1px solid #ffffff1a'}
          _hover={{
            borderColor: '#ffffff33',
          }}
          borderRadius={'full'}
          py={20}
          alignItems={'center'}
          cursor={'pointer'}
          width={{ base: '100%', lg: '25%' }}
        >
          <Img src={Ethereum} boxSize={'50px'} />
          <Text fontSize={'2xl'} color={'white'}>
            Ethereum
          </Text>
        </Stack>

        <Stack
          onClick={() => nav('/create/start')}
          border={'1px solid #ffffff1a'}
          _hover={{
            borderColor: '#ffffff33',
          }}
          borderRadius={'full'}
          py={20}
          alignItems={'center'}
          cursor={'pointer'}
          width={{ base: '100%', lg: '25%' }}
        >
          <Img src={Flow} boxSize={'50px'} />
          <Text fontSize={'2xl'} color={'white'}>
            Flow
          </Text>
        </Stack>

        <Stack
          onClick={() => nav('/create/start')}
          border={'1px solid #ffffff1a'}
          _hover={{
            borderColor: '#ffffff33',
          }}
          borderRadius={'full'}
          py={20}
          alignItems={'center'}
          cursor={'pointer'}
          width={{ base: '100%', lg: '25%' }}
        >
          <Img src={Polygon} boxSize={'50px'} />
          <Text fontSize={'2xl'} color={'white'}>
            Polygon
          </Text>
        </Stack>
      </Stack>

      <Footer />
    </Stack>
  );
};

export default BlockchainComp;
