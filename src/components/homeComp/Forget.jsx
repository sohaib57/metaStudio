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

const Forget = () => {
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
        fontSize={'md'}
        color={'#a0a4a7'}
        textAlign={'center'}
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        I forgot my password
      </Link>

      <Modal isCentered isOpen={isOpen} onClose={onClose} size={'xl'}>
        {overlay}
        <ModalContent bgColor={'#001529'} textColor={'white'}>
          <ModalHeader textAlign={'center'} fontSize={'4xl'}>
            Recover Password
          </ModalHeader>
          <ModalCloseButton
            _focus={{
              boxShadow: 'none',
            }}
          />
          <ModalBody px={10} pb={5}>
            <Text textAlign={'center'} fontSize={'md'}>
              Your Email or Username
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
              >
                Recover
              </Button>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Forget;
