import React from 'react';
import {
  Button,
  Stack,
  Text,
  Divider,
  HStack,
  Avatar,
  Img,
  AvatarBadge,
  Spacer,
  Center,
} from '@chakra-ui/react';
import pic1 from '../../assests/images/pic1.png';
import pic2 from '../../assests/images/pic2.png';
import pic3 from '../../assests/images/pic3.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';

const Build = () => {
  const nav = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows : false,
    responsive : [
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <Stack px={10}>
      <Stack
        width={'100%'}
        bgColor={'#282c4b'}
        rounded={'md'}
        my={10}
        py={10}
        direction={{base:'column',lg:'row'}}
      >
        <Stack width={{base:'100%',lg:'30%'}} p={10} justifyContent={'center'}>
          <Text color={'white'} fontSize={{base:'2xl',sm:'5xl'}} fontWeight={'700'}>
            Build With Editor Tools
          </Text>
          <Divider />
          <Text color={'#ffffff99'}>
            Each web3 community is unique and deserves a custom marketplace with
            its own look, features, fees
          </Text>
          <Stack pt={2}>
            
            <Button
              onClick={() => nav('/dashboard')}
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
              Go To Editor
            </Button>
          </Stack>
        </Stack>
        <Stack width={{base:'100%',lg:'70%'}}>
          <Slider {...settings}>
            <Stack pr={5}>
              <Stack bgColor={'#ae64da'} rounded={'md'} p={3}>
                <Img src={pic1} rounded={'md'} />
                <Text fontSize={'lg'} color={'white'} fontWeight={'700'}>
                  tiny dinos
                </Text>
                <Text color={'#ffffff99'} fontSize={'sm'}>
                  cc0 omnichain nft | 10k fully minted for free | no roadmap,
                  just tiny dinos and vibes #rawr
                </Text>
                <HStack>
                  <Stack>
                    <Text color={'white'} fontSize={'sm'}>
                      Volume
                    </Text>
                    <Text color={'#ffffff99'} fontSize={'md'}>
                      4.1K ETH
                    </Text>
                  </Stack>

                  <Center height="50px">
                    <Divider orientation="vertical" />
                  </Center>

                  <Stack>
                    <Text color={'white'} fontSize={'sm'}>
                      Floor
                    </Text>
                    <Text color={'#ffffff99'} fontSize={'md'}>
                      0.11 ETH
                    </Text>
                  </Stack>
                </HStack>
              </Stack>
            </Stack>

            <Stack pr={5}>
              <Stack bgColor={'#fa720c'} rounded={'md'} p={3}>
                <Img src={pic2} rounded={'md'} />
                <Text fontSize={'lg'} color={'white'} fontWeight={'700'}>
                  tiny dinos
                </Text>
                <Text color={'#ffffff99'} fontSize={'sm'}>
                  cc0 omnichain nft | 10k fully minted for free | no roadmap,
                  just tiny dinos and vibes #rawr
                </Text>
                <HStack>
                  <Stack>
                    <Text color={'white'} fontSize={'sm'}>
                      Volume
                    </Text>
                    <Text color={'#ffffff99'} fontSize={'md'}>
                      4.1K ETH
                    </Text>
                  </Stack>
                  <Center height="50px">
                    <Divider orientation="vertical" />
                  </Center>

                  <Stack>
                    <Text color={'white'} fontSize={'sm'}>
                      Floor
                    </Text>
                    <Text color={'#ffffff99'} fontSize={'md'}>
                      0.11 ETH
                    </Text>
                  </Stack>
                </HStack>
              </Stack>
            </Stack>

            <Stack pr={5}>
              <Stack bgColor={'#0073b4'} rounded={'md'} p={3}>
                <Img src={pic3} rounded={'md'} />
                <Text fontSize={'lg'} color={'white'} fontWeight={'700'}>
                  tiny dinos
                </Text>
                <Text color={'#ffffff99'} fontSize={'sm'}>
                  cc0 omnichain nft | 10k fully minted for free | no roadmap,
                  just tiny dinos and vibes #rawr
                </Text>
                <HStack>
                  <Stack>
                    <Text color={'white'} fontSize={'sm'}>
                      Volume
                    </Text>
                    <Text color={'#ffffff99'} fontSize={'md'}>
                      4.1K ETH
                    </Text>
                  </Stack>
                  <Center height="50px">
                    <Divider orientation="vertical" />
                  </Center>

                  <Stack>
                    <Text color={'white'} fontSize={'sm'}>
                      Floor
                    </Text>
                    <Text color={'#ffffff99'} fontSize={'md'}>
                      0.11 ETH
                    </Text>
                  </Stack>
                </HStack>
              </Stack>
            </Stack>
          </Slider>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Build;
