import React, { useContext, useEffect, useState } from 'react';
import {
  Stack,
  Img,
  Text,
  HStack,
  Badge,
  Spacer,
  Input,
  Textarea,
  Select,
  Button,
  Avatar,
  IconButton,
} from '@chakra-ui/react';
import LandingPageHeader from '../header/LandingPageHeader';
import Ethereum from '../../assests/images/ETHEREUM.svg';
import Footer from '../footer/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CollectionModal from './CollectionModal';
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import PropertiesModal from './PropertiesModal';
import ContextWallet from '../../context/WalletConnectCanvas';

const UploadComp = () => {
  const { walletAddress } = useContext(ContextWallet)
  const [formData, setformData] = useState([{}])
  console.log(formData)
  const [image, setImage] = useState()
  const [properties, setproperties] = useState()
  const collection = []
  const nav = useNavigate();
  const handleChange = (e) => {
    setformData(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
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

  const imageHandleChange = e => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map(file =>
        URL.createObjectURL(file)
      );
      setImage(filesArray)
    }
  };
  console.log(image)
  // useEffect(() => {
  //   const conector = async () => {
  //     const provider = new ethers.providers.Web3Provider(window.ethereum)
  //     await provider.send("eth_requestAccounts", []);
  //     const signer = provider.getSigner()
  //     const address = signer.getAddress()
  //     console.log(address)
  //     setuserAddress(address)
  //     console.log(userAddress)
  //   }
  //   conector()
  //     .catch(console.error)

  // }, [])
  console.log(properties)
  const getData = () => {
    const imageData = image
    const priceData = formData.price
    const nameData = formData.Nftname
    const descData = formData.description
    const propertiesData = properties
    collection.push(imageData, priceData, nameData, descData, propertiesData)
  }
  console.log(collection)
  return (
    <Stack width={'100%'} bgColor={'#282c4b'} pb={'50px'}>
      <LandingPageHeader />
      <Stack
        px={{ base: 10, md: 40 }}
      >
        <Stack>
          <Text fontSize={{ base: 'lg', sm: '4xl' }} color={'white'}>
            Create New NFT
          </Text>
          <Text fontSize={'md'} color={'#ffffff99'}>
            Single edition on Ethereum
          </Text>
        </Stack>
        <Spacer />
        <Stack w={'100%'}>
          <Stack
            onClick={() => nav('/editor')}
            bgColor={'transparent'}
            borderRadius={'16px'}
            border={'1px solid #ffffff1a'}
            color={'white'}
            _hover={{
              border: '1px solid #ffffff33',
              bgColor: 'transparent',
              color: 'white',
            }}
            _focus={{
              boxShadow: 'none',
            }}
            _active={{}}
            minH={'28'}
            align={'center'}
            justify={'center'}
          >
            <AiOutlinePlusCircle size={'1.5rem'} />
            <Text>
              Create New
            </Text>
          </Stack>
        </Stack>
      </Stack>
      <Stack px={{ base: 10, md: 40 }} width={'100%'} gap={2}>
        <Stack>
          <Text color={'white'}>Choose wallet</Text>
          <Stack
            border={'1px solid #ffffff1a'}
            _hover={{
              borderColor: '#ffffff33',
            }}
            borderRadius={'16px'}
          >
            <Stack direction={{ base: 'column', md: 'row' }} p={5}>
              <Stack direction={'row'}>
                <Img src={Ethereum} boxSize={'40px'} />
                <Stack lineHeight={1}>
                  <Text color={'white'}>{walletAddress}</Text>
                  <Text color={'white'}>Ethereum</Text>
                </Stack>
              </Stack>
              <Spacer />
              <Stack width={'fit-content'}>
                <Badge ml="1" colorScheme="green">
                  {walletAddress ? "Connected" : "Not Connected"}
                </Badge>
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        <Stack>
          <Text color={'white'}>Upload File</Text>
          <Stack
            border={'1px solid #ffffff1a'}
            _hover={{
              borderColor: '#ffffff33',
            }}
            borderRadius={'16px'}
            alignItems={'center'}
            py={5}
          >
            <Text color={'#8c8c8c'}>
              PNG, GIF, WEBP, MP4 or MP3. Max 100mb.
            </Text>
            <Input
              cursor={'pointer'}
              color={'white'}
              width={{ base: '100%', md: '30%' }}
              border={'none'}
              _focus={{}}
              _active={{}}
              type={'file'}
              onChange={(e) => imageHandleChange(e)}
            />
          </Stack>
        </Stack>

        <Stack
          width={'100%'}
          direction={{ base: 'column', md: 'row' }}
          alignItems={'flex-end'}
        >
          <CollectionModal />

          <Stack width={{ base: '100%', md: '70%' }} px={8}>
            <Slider {...settings}>
              <Stack px={5} cursor={'pointer'}>
                <Stack
                  border={'1px solid #ffffff1a'}
                  _hover={{
                    borderColor: '#ffffff33',
                  }}
                  borderRadius={'16px'}
                  py={5}
                  alignItems={'center'}
                >
                  <Avatar
                    size={'md'}
                    name="San Obrahmov"
                    src="https://bit.ly/broken-link"
                  />
                  <Text color={'white'} fontSize={'md'}>
                    Bored Ape
                  </Text>
                  <Text color={'#8c8c8c'}>ERC-721</Text>
                </Stack>
              </Stack>

              <Stack px={5} cursor={'pointer'}>
                <Stack
                  border={'1px solid #ffffff1a'}
                  _hover={{
                    borderColor: '#ffffff33',
                  }}
                  borderRadius={'16px'}
                  py={5}
                  alignItems={'center'}
                >
                  <Avatar
                    size={'md'}
                    name="Lan Vbrahmov"
                    src="https://bit.ly/broken-link"
                  />
                  <Text color={'white'} fontSize={'md'}>
                    Bored Ape
                  </Text>
                  <Text color={'#8c8c8c'}>ERC-721</Text>
                </Stack>
              </Stack>

              <Stack px={5} cursor={'pointer'}>
                <Stack
                  border={'1px solid #ffffff1a'}
                  _hover={{
                    borderColor: '#ffffff33',
                  }}
                  borderRadius={'16px'}
                  py={5}
                  alignItems={'center'}
                >
                  <Avatar
                    size={'md'}
                    name="Dan Abrahmov"
                    src="https://bit.ly/broken-link"
                  />
                  <Text color={'white'} fontSize={'md'}>
                    Bored Ape
                  </Text>
                  <Text color={'#8c8c8c'}>ERC-721</Text>
                </Stack>
              </Stack>
            </Slider>
          </Stack>
        </Stack>
        <Stack>
          <Text color={'white'}>Price</Text>
          <Stack>
            <HStack gap={0} spacing={0}>
              <Input
                name={'price'}
                value={formData.price}
                onChange={(e) => handleChange(e)}
                borderLeftRadius={'16px'}
                borderRightRadius={'none'}
                borderColor={'#ffffff1a'}
                _hover={{
                  borderColor: '#ffffff33',
                }}
                borderRadius={'10px'}
                type="number"
                placeholder={'Enter Price'}
                color={'white'}
                _focus={{}}
              />
              <Select
                borderLeftRadius={'none'}
                borderRightRadius={'16px'}
                color={'white'}
                borderColor={'#ffffff1a'}
                _hover={{
                  borderColor: '#ffffff33',
                }}
                _focus={{}}
                width={{ base: '100%', md: '30%' }}
              >
                <option
                  style={{
                    color: 'black',
                  }}
                  value="option1"
                >
                  ETH
                </option>
                <option
                  style={{
                    color: 'black',
                  }}
                  value="option2"
                >
                  wETH
                </option>
              </Select>
            </HStack>
          </Stack>
        </Stack>

        <Stack>
          <Text color={'white'}>Name</Text>
          <Stack>
            <Input
              name={'Nftname'}
              value={formData.Nftname}
              onChange={(e) => handleChange(e)}
              borderColor={'#ffffff1a'}
              _hover={{
                borderColor: '#ffffff33',
              }}
              borderRadius={'10px'}
              type="text"
              placeholder={'e. g. "Redeemable T-Shirt with logo"'}
              color={'white'}
              _focus={{}}
            />
          </Stack>
        </Stack>

        <Stack>
          <Text color={'white'}>Description (Optional)</Text>
          <Stack>
            <Textarea
              name={'description'}
              value={formData.description}
              onChange={(e) => handleChange(e)}
              color={'white'}
              borderColor={'#ffffff1a'}
              _hover={{
                borderColor: '#ffffff33',
              }}
              borderRadius={'16px'}
              _focus={{}}
              resize="none"
              placeholder={
                'e. g. "After purchasing you will be able to get the real T-Shirt"'
              }
            />
          </Stack>
        </Stack>
        <PropertiesModal setStateOfParent={(childData) => {
          setproperties(childData)
        }} />

        <Stack alignItems={'center'}>
          <Button
            onClick={() => getData()}
            bgColor={'transparent'}
            borderRadius={'16px'}
            border={'1px solid #ffffff1a'}
            width={'fit-content'}
            color={'white'}
            _hover={{
              border: '1px solid #ffffff33',
              bgColor: 'transparent',
              color: 'white',
            }}
            _focus={{
              boxShadow: 'none',
            }}
            _active={{}}
          >
            Create Items
          </Button>
        </Stack>
      </Stack>

      <Footer />
    </Stack>
  );
};

export default UploadComp;
