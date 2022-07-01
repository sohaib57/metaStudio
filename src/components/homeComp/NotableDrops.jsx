import React from 'react';
import { Button, Stack, Text, Divider, Img } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Promocard1 from '../../assests/images/promocard1.jpg';
import Promocard2 from '../../assests/images/promocard2.jpg';
import Promocard3 from '../../assests/images/promocard3.jpg';


const NotableDrops = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows : false,
  };
  return (
    <Stack width={'100%'} py={10}>
      <Stack alignItems={'center'}>
        <Text
          textAlign={'center'}
          fontSize={'3xl'}
          fontWeight={'700'}
          fontFamily={'sans-serif'}
        >
          Notable Drops
        </Text>
        <Divider borderColor={'#001529'} width={'10%'} />
      </Stack>

      <Stack px={{ base: 10, md: 20 }} py={5}>
        <Slider {...settings}>
         

          <Stack width={{ base: '100%', md: '33%' }} pr={5}>
            <Stack
              bgImage={Promocard2}
              bgPosition={'center'}
              bgRepeat={'no-repeat'}
              bgSize={'cover'}
              borderRadius={'full'}
              h={'370px'}
              justifyContent={'space-between'}
            >
              <Stack p={5} alignItems={'end'}>
                <Button
                  width={'fit-content'}
                  bgColor={'#00000033'}
                  borderRadius={'50px'}
                  border={'2px solid white'}
                  color={'white'}
                  _hover={{
                    border: '1px solid white',
                    bgColor: '#00000033',
                    color: 'white',
                  }}
                  _focus={{
                    boxShadow: 'none',
                  }}
                  fontSize={'md'}
                  size={'sm'}
                >
                  Live
                </Button>
              </Stack>
              <Stack
                h={'100px'}
                bgImage={
                  'linear-gradient(rgba(48, 51, 57, 0) 0%, rgb(127, 101, 156));'
                }
                justifyContent={'flex-end'}
                p={5}
              >
                <Text
                  color={'white'}
                  fontWeight={'600'}
                  fontSize={{ base: 'xl', md: '2xl' }}
                >
                  METAPRIDE LAND CHARITY
                </Text>
              </Stack>
            </Stack>
          </Stack>

          <Stack width={{ base: '100%', md: '33%' }} pr={5}>
            <Stack
              bgImage={Promocard3}
              bgPosition={'center'}
              bgRepeat={'no-repeat'}
              bgSize={'cover'}
              h={'370px'}
              borderRadius={'full'}
              justifyContent={'space-between'}
            >
              <Stack p={5} alignItems={'end'}>
                <Button
                  width={'fit-content'}
                  bgColor={'#00000033'}
                  borderRadius={'50px'}
                  border={'2px solid white'}
                  color={'white'}
                  _hover={{
                    border: '1px solid white',
                    bgColor: '#00000033',
                    color: 'white',
                  }}
                  _focus={{
                    boxShadow: 'none',
                  }}
                  fontSize={'md'}
                  size={'sm'}
                >
                  Live
                </Button>
              </Stack>
              <Stack
                h={'100px'}
                bgImage={
                  ' linear-gradient(rgba(48, 51, 57, 0) 0%, rgba(62, 63, 64, 0.9) 75.16%)'
                }
                justifyContent={'flex-end'}
                p={5}
              >
                <Text
                  color={'white'}
                  fontWeight={'600'}
                  fontSize={{ base: 'xl', md: '2xl' }}
                >
                  Lacoste UNDW3 Official
                </Text>
              </Stack>
            </Stack>
          </Stack>

          <Stack width={{ base: '100%', md: '33%' }} pr={5}>
            <Stack
              bgImage={Promocard1}
              bgPosition={'center'}
              bgRepeat={'no-repeat'}
              bgSize={'cover'}
              h={'370px'}
              borderRadius={'full'}
              justifyContent={'space-between'}
            >
              <Stack p={5} alignItems={'end'}>
                <Button
                  width={'fit-content'}
                  bgColor={'#00000033'}
                  borderRadius={'50px'}
                  border={'2px solid white'}
                  color={'white'}
                  _hover={{
                    border: '1px solid white',
                    bgColor: '#00000033',
                    color: 'white',
                  }}
                  _focus={{
                    boxShadow: 'none',
                  }}
                  fontSize={'md'}
                  size={'sm'}
                >
                  Live
                </Button>
              </Stack>
              <Stack
                h={'100px'}
                bgImage={
                  ' linear-gradient(rgba(48, 51, 57, 0) 0%, rgba(62, 63, 64, 0.9) 75.16%)'
                }
                justifyContent={'flex-end'}
                p={5}
              >
                <Text
                  color={'white'}
                  fontWeight={'600'}
                  fontSize={{ base: 'xl', md: '2xl' }}
                >
                  Lacoste UNDW3 Official
                </Text>
              </Stack>
            </Stack>
          </Stack>

          <Stack width={{ base: '100%', md: '33%' }} pr={5}>
            <Stack
              bgImage={Promocard2}
              bgPosition={'center'}
              bgRepeat={'no-repeat'}
              bgSize={'cover'}
              borderRadius={'full'}
              h={'370px'}
              justifyContent={'space-between'}
            >
              <Stack p={5} alignItems={'end'}>
                <Button
                  width={'fit-content'}
                  bgColor={'#00000033'}
                  borderRadius={'50px'}
                  border={'2px solid white'}
                  color={'white'}
                  _hover={{
                    border: '1px solid white',
                    bgColor: '#00000033',
                    color: 'white',
                  }}
                  _focus={{
                    boxShadow: 'none',
                  }}
                  fontSize={'md'}
                  size={'sm'}
                >
                  Live
                </Button>
              </Stack>
              <Stack
                h={'100px'}
                bgImage={
                  'linear-gradient(rgba(48, 51, 57, 0) 0%, rgb(127, 101, 156));'
                }
                justifyContent={'flex-end'}
                p={5}
              >
                <Text
                  color={'white'}
                  fontWeight={'600'}
                  fontSize={{ base: 'xl', md: '2xl' }}
                >
                  METAPRIDE LAND CHARITY
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Slider>
      </Stack>
    </Stack>
  );
};

export default NotableDrops;
