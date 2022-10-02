import React from 'react';
import {
  Stack,
  Text,
  Divider,
} from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CollectionCard from '../explore/CollectionCard';

const TrendingNfts = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive : [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
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
    <Stack width={'100%'} p={10} mb={10}>
      <Stack alignItems={'center'} pb={5}>
        <Text
          textAlign={'center'}
          fontSize={'3xl'}
          fontWeight={'700'}
          fontFamily={'sans-serif'}
        >
          Trending Nft's
        </Text>
        <Divider borderColor={'#001529'} width={'10%'} />
      </Stack>
      <Stack>
      <Slider {...settings}>
        <CollectionCard  />

        <CollectionCard  />

        <CollectionCard  />

        <CollectionCard  />

        <CollectionCard  />
      </Slider>
      </Stack>
    </Stack>
  );
};

export default TrendingNfts;
