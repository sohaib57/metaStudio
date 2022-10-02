import { Heading, Img, Stack } from '@chakra-ui/react'
import React from 'react'
import Slider from 'react-slick'
import temp1 from '../../assests/images/temp1.png'
import temp2 from '../../assests/images/temp2.png'
import temp3 from '../../assests/images/temp3.png'
import temp4 from '../../assests/images/temp4.png'
import temp5 from '../../assests/images/temp5.png'
import temp6 from '../../assests/images/temp6.png'
import { TiArrowLeftOutline, TiArrowRightOutline } from 'react-icons/ti'

const CreateTemplate = () => {
    const settings = {
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <TiArrowRightOutline color='black' />,
        prevArrow: <TiArrowLeftOutline color='black' />,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: true,
                },
            },
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
        <>
            <Stack px={'6'} py={'9'} spacing={'6'}>
                <Heading>Create with Templates</Heading>
                <Slider {...settings}>
                    <Img src={temp1} pr={'4'} maxH={'96'} _hover={{ cursor: 'pointer' }} />
                    <Img src={temp2} px={'4'} maxH={'96'} _hover={{ cursor: 'pointer' }} />
                    <Img src={temp3} px={'4'} maxH={'96'} _hover={{ cursor: 'pointer' }} />
                    <Img src={temp4} px={'4'} maxH={'96'} _hover={{ cursor: 'pointer' }} />
                    <Img src={temp5} px={'4'} maxH={'96'} _hover={{ cursor: 'pointer' }} />
                    <Img src={temp6} px={'4'} maxH={'96'} _hover={{ cursor: 'pointer' }} />
                </Slider>
            </Stack>
        </>
    )
}

export default CreateTemplate