import React from 'react';
import {
  Button,
  Stack,
  Text,
  InputGroup,
  InputRightElement,
  Input,
  Link,
  HStack,
  Divider,
} from '@chakra-ui/react';
import { FaTwitter, FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <Stack
      bgColor={'#282c4b'}
      px={{ base: 10, md: 20 }}
      py={10}
      gap={{ base: 5, lg: 20 }}
    >
      <Stack width={'100%'} direction={{ base: 'column', lg: 'row' }}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          width={{ base: '100%', lg: '70%' }}
          gap={{ base: 5, lg: 20 }}
        >
          <Stack width={{ base: '100%', md: '100%' }}>
            <Text color={'white'} fontWeight={'600'} fontSize={'xl'}>
              Get the latest Editor updates
            </Text>
            <InputGroup pt={2}>
              <Input
                placeholder="Your Email"
                h={'60px'}
                rounded={'lg'}
                color={'white'}
                _focus={{}}
              />
              <InputRightElement
                width={'20%'}
                children={<Button rounded={'xl'}>I'm in</Button>}
                m={4}
              />
            </InputGroup>
          </Stack>
          <Stack
            width={{ base: '100%', md: '100%' }}
            direction={{ base: 'column', md: 'row' }}
            gap={{ base: 5, lg: 20 }}
          >
            <Stack width={{ base: '100%', md: '100%' }}>
              <Text color={'white'} fontWeight={'600'} fontSize={'xl'}>
                Marketplace
              </Text>
              <Stack>
                <Link
                  color={'white'}
                  _hover={{ color: 'white' }}
                  fontSize={'sm'}
                >
                  Explore
                </Link>
                <Link
                  color={'white'}
                  _hover={{ color: 'white' }}
                  fontSize={'sm'}
                >
                  Blog
                </Link>
                <Link
                  color={'white'}
                  _hover={{ color: 'white' }}
                  fontSize={'sm'}
                >
                  How it works
                </Link>
                <Link
                  color={'white'}
                  _hover={{ color: 'white' }}
                  fontSize={'sm'}
                >
                  Collections
                </Link>
              </Stack>
            </Stack>

            <Stack width={{ base: '100%', md: '100%' }}>
              <Text color={'white'} fontWeight={'600'} fontSize={'xl'}>
                Links
              </Text>
              <Stack>
                <Link
                  color={'white'}
                  _hover={{ color: 'white' }}
                  fontSize={'sm'}
                >
                  Editor
                </Link>
                <Link
                  color={'white'}
                  _hover={{ color: 'white' }}
                  fontSize={'sm'}
                >
                  Branding
                </Link>
                <Link
                  color={'white'}
                  _hover={{ color: 'white' }}
                  fontSize={'sm'}
                >
                  Tranding NFTs
                </Link>
                <Link
                  color={'white'}
                  _hover={{ color: 'white' }}
                  fontSize={'sm'}
                >
                  Help center
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack width={{ base: '100%', lg: '30%' }}>
          <Text color={'white'} fontWeight={'600'} fontSize={'xl'}>
            Join Editor NFTs community
          </Text>
          <HStack gap={5}>
            <Link>
              <FaTwitter size={30} color={'white'} />
            </Link>
            <Link>
              <FaInstagram size={30} color={'white'} />
            </Link>
            <Link>
              <FaYoutube size={30} color={'white'} />
            </Link>
            <Link>
              <FaFacebook size={30} color={'white'} />
            </Link>
          </HStack>
        </Stack>
      </Stack>
      <Stack>
        <Divider borderColor={'#ffffff14'} />
        <Stack
          direction={{ base: 'column', md: 'row' }}
          gap={5}
          justifyContent={'center'}
        >
          <Text color={'white'}>© Editor, Inc. All rights reserved.</Text>
          <Link color={'white'} _hover={{ color: 'white' }}>
            Community guidelines
          </Link>
          <Link color={'white'} _hover={{ color: 'white' }}>
            Terms
          </Link>
          <Link color={'white'} _hover={{ color: 'white' }}>
            Privacy policy
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
