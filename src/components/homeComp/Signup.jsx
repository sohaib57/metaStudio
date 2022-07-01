import React from 'react';
import {
  Button,
  Link,
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
  Divider,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
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
      <Link
        fontSize={'sm'}
        color={'#40a9ff'}
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        Sign Up
      </Link>

      <Modal isCentered isOpen={isOpen} onClose={onClose} size={'xl'}>
        {overlay}
        <ModalContent bgColor={'#001529'} textColor={'white'}>
          <ModalHeader textAlign={'center'} fontSize={'4xl'}>
            Create a new account
          </ModalHeader>
          <ModalCloseButton
            _focus={{
              boxShadow: 'none',
            }}
          />
          <ModalBody px={10} pb={5}>
            <Text textAlign={'center'} fontSize={'md'}>
              It's quick and easy.
            </Text>
            <Stack gap={3} py={3} alignItems={'center'}>
              <Input
                placeholder="Username"
                type={'text'}
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
                placeholder="Email"
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
                placeholder="Contact Number"
                type={'number'}
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
                placeholder="Password"
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
              <Divider />
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
                onClick={() => nav('/login')}
              >
                Signup
              </Button>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Signup;
