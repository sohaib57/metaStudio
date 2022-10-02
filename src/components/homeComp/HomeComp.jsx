import React from 'react';
import {
  Stack,
  Img,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import gif1 from '../../assests/images/original.gif';
import gif2 from '../../assests/images/original4.gif';
import gif3 from '../../assests/images/original5.gif';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LandingPageHeader from '../header/LandingPageHeader';

const HomeComp = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const nav = useNavigate();
  return (
    <Stack width={'100%'} bgColor={'#282c4b'} pb={'33px'}>
      
      <LandingPageHeader/>

      <Stack
        width={'100%'}
        direction={{ base: 'column', md: 'row' }}
        px={{ base: 10, md: 20 }}
      >
        <Stack width={{ base: '100%', md: '50%' }}>
          <Heading
            color={'white'}
            fontSize={{ base: '2xl', md: '5xl', lg: '7xl' }}
            fontWeight={'600'}
          >
            Find Your Own Unique digital rarity
          </Heading>
          <Text
            color={'white'}
            fontSize={'sm'}
            width={{ base: '100%', md: '75%' }}
            py={5}
          >
            Explore the best collections from hand-picked digital artists out
            there and find your gem.
          </Text>
          <Stack py={3} direction={'row'} gap={4}>
            <Button
              onClick={() => nav('/explore')}
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
              onClick={() => nav('/create/blockchain')}
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

        <Stack width={{ base: '100%', md: '50%' }}>
        <Slider {...settings} >
          <Stack >
            <Img src={gif1} width={'450px' } rounded={'lg'}/>
          </Stack>
          <Stack >
            <Img src={gif2} width={'450px' } rounded={'lg'}/>
          </Stack>
          <Stack >
            <Img src={gif3} width={'450px' } rounded={'lg'}/>
          </Stack>
          </Slider>
        
          {/* <Stack width={'100'}  direction={'row'}>
            <Stack
              width={{ base: '100%', md: '100%' }}
              justifyContent={'center'}
            >
              <Img
                src={NFT2}
                borderRadius="full"
                boxSize={{
                  base: '100px',
                  xs: '150px',
                  md: '150px',
                  lg: '250px',
                }}
                p={3}
                border={'1px solid #205375'}
              />
            </Stack>
            <Stack width={{ base: '100%', md: '100%' }} gap={4}>
              <Img
                src={NFT1}
                borderRadius="full"
                boxSize={{ base: '100px', md: '150px', lg: '210px' }}
                p={3}
                border={'1px solid #205375'}
              />
              <Img
                src={NFT1}
                borderRadius="full"
                boxSize={{ base: '100px', md: '150px', lg: '210px' }}
                p={3}
                border={'1px solid #205375'}
              />
            </Stack>
          </Stack> */}

          
         
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HomeComp;
