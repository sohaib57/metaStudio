import React from 'react';
import {
  Button,
  HStack,
  Img,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import meta from '../../assests/images/metamask.svg';
import coinbase from '../../assests/images/coinbase.svg';
import walletconnect from '../../assests/images/walletconnect.png';
import {
  useMetamask,
  useCoinbaseWallet,
  useWalletConnect,
} from '@thirdweb-dev/react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import Signup from './Signup';
import { useNavigate } from 'react-router-dom';

const SignInModal = () => {
  const nav = useNavigate();
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const connectWithMetamask = useMetamask();
  const connectWithCoinBase = useCoinbaseWallet();
  const connectWithWalletConnect = useWalletConnect();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  return (
    <>
      <Button
        bgColor={'transparent'}
        borderRadius={'none'}
        border={'1px solid white'}
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
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        Sign In
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose} size={'xl'}>
        {overlay}
        <ModalContent bgColor={'#001529'} textColor={'white'}>
          <ModalHeader>Log in or Create an account</ModalHeader>
          <ModalCloseButton
            _focus={{
              boxShadow: 'none',
            }}
          />
          <ModalBody>
            <VStack align={'center'} justify={'center'}>
              <Button
                onClick={connectWithMetamask}
                w={'full'}
                bgColor={'#205375'}
                _hover={{ color: '#001529' }}
                _focus={{ boxShadow: 'none' }}
                py={5}
              >
                <Stack direction={'row'} align={'center'}>
                  <Text>Connect MetaMask</Text>
                  <Img src={meta} boxSize={'6'} />
                </Stack>
              </Button>

              <Button
                onClick={connectWithCoinBase}
                w={'full'}
                bgColor={'#205375'}
                _hover={{ color: '#001529' }}
                _focus={{ boxShadow: 'none' }}
              >
                <Stack direction={'row'} align={'center'}>
                  <Text>Connect Coinbase</Text>
                  <Img src={coinbase} boxSize={'6'} />
                </Stack>
                {console.log('metamask')}
              </Button>

              <Button
                onClick={connectWithWalletConnect}
                w={'full'}
                bgColor={'#205375'}
                _hover={{ color: '#001529' }}
                _focus={{ boxShadow: 'none' }}
              >
                <Stack direction={'row'} align={'center'}>
                  <Text> Connect WalletConnect</Text>
                  <Img src={walletconnect} boxSize={'6'} />
                </Stack>
              </Button>
            </VStack>
            <Stack py={5}>
              <Text> Social</Text>
              <Stack direction={'row'}>
                <Button
                  bgColor={'#205375'}
                  _hover={{ color: '#001529' }}
                  _focus={{ boxShadow: 'none' }}
                  width={'33%'}
                >
                  <Stack direction={'row'} align={'center'}>
                    <FaFacebook />
                    <Text> Facebook</Text>
                  </Stack>
                </Button>

                <Button
                  width={'33%'}
                  bgColor={'#205375'}
                  _hover={{ color: '#001529' }}
                  _focus={{ boxShadow: 'none' }}
                >
                  <Stack direction={'row'} align={'center'}>
                    <FaTwitter />
                    <Text> Twitter</Text>
                  </Stack>
                </Button>

                <Button
                  width={'33%'}
                  bgColor={'#205375'}
                  _hover={{ color: '#001529' }}
                  _focus={{ boxShadow: 'none' }}
                >
                  <Stack direction={'row'} align={'center'}>
                    <FcGoogle />
                    <Text> Google</Text>
                  </Stack>
                </Button>
              </Stack>
            </Stack>
            <Stack direction={'row'} py={5}>
              <Link
                color={'#40a9ff'}
                fontSize={'sm'}
                onClick={() => nav('/login')}
              >
                Sign In with Email
              </Link>

              <Spacer />
              <HStack>
                <Text fontSize={'sm'}>New user Then Register</Text>

                <Signup />
              </HStack>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SignInModal;
