import React from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  Input,
} from '@chakra-ui/react';
import Forget from './Forget';
import { useNavigate } from 'react-router-dom';
import HomeComp from './HomeComp';

const Login = () => {
  const nav = useNavigate();
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  return (
    <>
      <Stack>
        <HomeComp />
        <Modal isCentered isOpen={onOpen} onClose={onClose} size={'xl'}>
          {overlay}
          <ModalContent bgColor={'#001529'} textColor={'white'}>
            <ModalHeader textAlign={'center'} fontSize={'4xl'}>
              Log In
            </ModalHeader>
            <ModalCloseButton
              onClick={() => nav('/')}
              _focus={{
                boxShadow: 'none',
              }}
            />
            <ModalBody px={10} pb={5}>
              <Text textAlign={'center'} fontSize={'md'}>
                You'll need to be logged in to upload to the Marketplace.
              </Text>
              <Stack gap={3} py={3} alignItems={'center'}>
                <Input
                  placeholder="Your username or email"
                  type={'email'}
                  textAlign={'center'}
                  borderColor={'#505861'}
                  _hover={{
                    borderColor: 'white',
                  }}
                  _focus={{
                    boxShadow: 'none',
                    borderColor: 'white',
                  }}
                />
                <Input
                  placeholder="Your password"
                  type={'password'}
                  textAlign={'center'}
                  borderColor={'#505861'}
                  _hover={{
                    borderColor: 'white',
                  }}
                  _focus={{
                    boxShadow: 'none',
                    borderColor: 'white',
                  }}
                />
                <Forget />
                <Button
                  width={'40%'}
                  bgColor={'transparent'}
                  borderRadius={'50px'}
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
                >
                  Log In
                </Button>
              </Stack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Stack>
    </>
  );
};

export default Login;
