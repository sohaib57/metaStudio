import React from 'react';
import { Button, Stack, Text, Divider, Img } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import gif1 from '../../assests/images/original.gif';
import gif2 from '../../assests/images/original1.gif';
import gif3 from '../../assests/images/original3.png';
import gif4 from '../../assests/images/original2.jpeg';
import gif5 from '../../assests/images/original4.gif';
import gif6 from '../../assests/images/original5.gif';
import gif7 from '../../assests/images/original7.gif';
import { useNavigate } from 'react-router-dom';

const NotableDrops = () => {
  const nav = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    responsive : [
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
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
    <Stack width={'100%'} py={10}>
      <Stack alignItems={'center'}>
        <Text
          textAlign={'center'}
          fontSize={'3xl'}
          fontWeight={'700'}
          fontFamily={'sans-serif'}
        >
          Top Creators
        </Text>
        <Divider borderColor={'#001529'} width={'10%'} />
      </Stack>

      <Stack px={{ base: 10, md: 10 }} py={5}>
        <Slider {...settings}>
          <Stack
            onClick={() => nav('/explore/collection/user1')}
            cursor={'pointer'}
            px={2}
          >
            <Img src={gif1} width={'200px'} borderRadius={'full'} />
            <Text textAlign={'center'} color={'black'} fontWeight={'600'}>
              DaRealGenius
            </Text>
          </Stack>
          <Stack
            onClick={() => nav('/explore/collection/user1')}
            cursor={'pointer'}
            px={2}
          >
            <Img src={gif2} width={'200px'} borderRadius={'full'} />
            <Text textAlign={'center'} color={'black'} fontWeight={'600'}>
              DaRealGenius
            </Text>
          </Stack>
          <Stack
            onClick={() => nav('/explore/collection/user1')}
            cursor={'pointer'}
            px={2}
          >
            <Img src={gif3} width={'200px'} borderRadius={'full'} />
            <Text textAlign={'center'} color={'black'} fontWeight={'600'}>
              DaRealGenius
            </Text>
          </Stack>
          <Stack
            onClick={() => nav('/explore/collection/user1')}
            cursor={'pointer'}
            px={2}
          >
            <Img src={gif4} width={'200px'} borderRadius={'full'} />
            <Text textAlign={'center'} color={'black'} fontWeight={'600'}>
              DaRealGenius
            </Text>
          </Stack>

          <Stack
            onClick={() => nav('/explore/collection/user1')}
            cursor={'pointer'}
            px={2}
          >
            <Img src={gif5} width={'200px'} borderRadius={'full'} />
            <Text textAlign={'center'} color={'black'} fontWeight={'600'}>
              DaRealGenius
            </Text>
          </Stack>
          <Stack
            onClick={() => nav('/explore/collection/user1')}
            cursor={'pointer'}
            px={2}
          >
            <Img src={gif6} width={'200px'} borderRadius={'full'} />
            <Text textAlign={'center'} color={'black'} fontWeight={'600'}>
              DaRealGenius
            </Text>
          </Stack>
          <Stack
            onClick={() => nav('/explore/collection/user1')}
            cursor={'pointer'}
            px={2}
          >
            <Img src={gif7} width={'200px'} borderRadius={'full'} />
            <Text textAlign={'center'} color={'black'} fontWeight={'600'}>
              DaRealGenius
            </Text>
          </Stack>
        </Slider>
      </Stack>
    </Stack>
  );
};

export default NotableDrops;
