import { Avatar, Button, FormControl, FormLabel, Heading, IconButton, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text, Textarea, Toast, useClipboard } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import Layout from '../../../layout/Layout'
import { AiTwotoneDelete } from 'react-icons/ai'
import { BsFillPersonFill, } from 'react-icons/bs'
import { GrInstagram, GrMail, GrTwitter } from 'react-icons/gr'
import { RiExternalLinkLine } from 'react-icons/ri'
import { BiCopy } from 'react-icons/bi'
const text = "0xA8752e8773bCaF04381B69DB560C40760BB3A45f"
const ProfileSettingsComp = () => {
  const [value, setValue] = useState(text)
  const { hasCopied, onCopy } = useClipboard(value)
  const toastIdRef = useRef()

  function addToast() {
    toastIdRef.current = Toast({
      title: 'Account created.',
      description: "We've created your account for you.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }
  return (
    <>
      <Layout >
        <Stack minHeight={'100vh'} bgColor={'#F2F2F3'}>
          <Stack h={'full'} p={'6'}>
            <Heading fontSize={'x-large'}>Settings</Heading>
            <Stack align={'center'} spacing={'6'}>
              {/* Profile Picture Card */}
              <Stack mt={'6'} bg={'rgb(240, 240, 240)'} boxShadow={'0px 3px 6px rgb(0 0 0 / 16%)'} borderRadius={'lg'} align={'center'} w={{ base: 'full', md: '40%' }} py={'6'}>
                <Avatar size={'2xl'} bgColor={'#D2D3D5'} />
                {/* Upload Button and Delete Button */}
                <Stack direction={{ base: 'column', md: 'row' }} pl={{ base: '0', md: '12' }} align={'center'}>
                  <Button
                    fontSize={{ base: 'xs', md: 'sm' }}
                    size={{ base: 'sm', md: 'md' }}
                    _focus={{ bgColor: 'white', boxShadow: '0px 0px 2px #ccc, 0px 0px 9px 0px #ccc' }}
                    _active={{ bgColor: 'white', boxShadow: '0px 0px 2px #ccc, 0px 0px 9px 0px #ccc' }}
                    borderRadius={'lg'}
                    _hover={{ bgColor: 'white', boxShadow: '0px 0px 2px #ccc, 0px 0px 9px 0px #ccc' }}
                  >
                    Upload Profile Picture
                  </Button>
                  <IconButton icon={<AiTwotoneDelete />} w={'fit-content'} _focus={{}} _active={{}} bgColor={'transparent'} _hover={{ bgColor: 'white', boxShadow: '0px 0px 2px #ccc, 0px 0px 9px 0px #ccc' }} />
                </Stack>
                {/* File Formate  */}
                <Stack align={'center'} px={'4'}>
                  <Text>Must be JPEG, PNG, or GIF and cannot exceed 10MB.</Text>
                </Stack>
              </Stack>
              {/* Profile FormControl */}
              <Stack px={'6'} mt={'6'} bg={'rgb(240, 240, 240)'} boxShadow={'0px 3px 6px rgb(0 0 0 / 16%)'} borderRadius={'lg'} align={'center'} w={{ base: 'full', md: '80%' }} py={'6'}>
                {/* Name and email Rewuired Form Control */}
                <FormControl isRequired>
                  <Stack direction={{ base: 'column', md: 'row' }} w={'full'}>
                    {/* Name and Email */}
                    <Stack w={'full'} spacing={'-1'} >
                      <FormLabel htmlFor='name' >Name</FormLabel>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents={'none'}
                          children={<BsFillPersonFill />}
                        />
                        <Input
                          id='name'
                          type='text'
                          _focus={{ bgColor: 'white', boxShadow: '0px 0px 2px #ccc, 0px 0px 9px 0px #ccc' }}
                          _active={{ bgColor: 'white', boxShadow: '0px 0px 2px #ccc, 0px 0px 9px 0px #ccc' }}
                          borderRadius={'lg'}

                        />
                      </InputGroup>
                    </Stack>

                    <Stack w={'full'} spacing={'-1'} >
                      <FormLabel htmlFor='email'>Email address</FormLabel>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents={'none'}
                          children={<GrMail />}
                        />
                        <Input
                          id='email'
                          type='email'
                          _focus={{ bgColor: 'white', boxShadow: '0px 0px 2px #ccc, 0px 0px 9px 0px #ccc' }}
                          _active={{ bgColor: 'white', boxShadow: '0px 0px 2px #ccc, 0px 0px 9px 0px #ccc' }}
                          borderRadius={'lg'}
                        />
                      </InputGroup>
                    </Stack>
                  </Stack>
                </FormControl>
                {/* Bio and Social Links */}
                <FormControl>
                  <Stack spacing={'4'} direction={{ base: 'column', md: 'row' }}>
                    <Stack spacing={'-1'} w={{ base: 'full', md: '50%' }}>
                      {/* <FormLabel>Bio</FormLabel> */}
                      <Textarea
                        placeholder='Bio'
                        resize={'none'}
                        h={'full'}
                        _focus={{ bgColor: 'white', boxShadow: '0px 0px 2px #ccc, 0px 0px 9px 0px #ccc' }}
                        _active={{ bgColor: 'white', boxShadow: '0px 0px 2px #ccc, 0px 0px 9px 0px #ccc' }}
                        borderRadius={'lg'}
                      />
                    </Stack>
                    {/* Socials */}
                    <Stack
                      w={{ base: 'full', md: '50%' }}
                      h={'fit-content'}
                      borderRadius={'lg'}
                      borderColor={'inherit'}
                    >
                      {/* Twitter */}
                      <InputGroup variant={'flushed'}>
                        <InputLeftElement
                          pointerEvents={'none'}
                          children={<GrTwitter />}
                        />
                        <Input
                          borderTopRadius={'lg'}
                          _focus={{ bgColor: 'white', boxShadow: '0px 0px 2px #ccc, 0px 0px 9px 0px #ccc' }}
                          _active={{ bgColor: 'white', boxShadow: '0px 0px 2px #ccc, 0px 0px 9px 0px #ccc' }}
                        />
                      </InputGroup>
                      {/* Instagram */}
                      <InputGroup variant={'flushed'}>
                        <InputLeftElement
                          pointerEvents={'none'}
                          children={<GrInstagram />}
                        />
                        <Input
                          _focus={{ bgColor: 'white', boxShadow: '0px 0px 2px #ccc, 0px 0px 9px 0px #ccc' }}
                          _active={{ bgColor: 'white', boxShadow: '0px 0px 2px #ccc, 0px 0px 9px 0px #ccc' }}
                        />
                      </InputGroup>
                      {/* Your Site */}
                      <InputGroup variant={'flushed'}>
                        <InputLeftElement
                          pointerEvents={'none'}
                          children={<RiExternalLinkLine />}
                        />
                        <Input
                          borderBottomRadius={'lg'}
                          _focus={{ bgColor: 'white', boxShadow: '0px 0px 2px #ccc, 0px 0px 9px 0px #ccc' }}
                          _active={{ bgColor: 'white', boxShadow: '0px 0px 2px #ccc, 0px 0px 9px 0px #ccc' }}
                        />
                      </InputGroup>
                    </Stack>
                    {/* Wallet and Social wrapper */}
                  </Stack>
                  <Stack direction={'row'} w={'full'}>
                    {/* Wallet and Submit */}
                    <Stack w={'full'} align={'center'}>
                      <Stack spacing={'-1'} w={'full'}>
                        <FormLabel>Wallet Address</FormLabel>
                        <InputGroup
                          _hover={{ bgColor: 'white', boxShadow: '0px 0px 2px #ccc, 0px 0px 9px 0px #ccc' }}
                          borderRadius={'lg'}
                        >
                          <Input placeholder={value} isReadOnly />
                          <InputRightElement>
                            <Button onClick={onCopy} variant={'link'} textDecor={'none'} _focus={{}} _active={{}}>
                              {hasCopied ? '' : ''}
                              <BiCopy />
                            </Button>
                          </InputRightElement>
                        </InputGroup>
                      </Stack>
                      <Button
                        type='submit'
                        w={'fit-content'}
                        _focus={{ bgColor: 'white', boxShadow: '0px 0px 2px #ccc, 0px 0px 9px 0px #ccc' }}
                        _active={{ bgColor: 'white', boxShadow: '0px 0px 2px #ccc, 0px 0px 9px 0px #ccc' }}
                        borderRadius={'lg'}
                        _hover={{ bgColor: 'white', boxShadow: '0px 0px 2px #ccc, 0px 0px 9px 0px #ccc' }}
                      >
                        Submit
                      </Button>
                    </Stack>
                  </Stack>
                </FormControl>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Layout>
    </>
  )
}

export default ProfileSettingsComp