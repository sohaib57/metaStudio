import React from 'react';
import { Button, Spacer, Stack, Text, Divider } from '@chakra-ui/react';
import Promocard1 from '../../assests/images/promocard1.jpg';
import Promocard2 from '../../assests/images/promocard2.jpg';
import Promocard3 from '../../assests/images/promocard3.jpg';

const NotableDrops = () => {
  return (
    <Stack width={'100%'} py={10}>
      <Stack alignItems={'center'}>
        <Text
          textAlign={'center'}
          fontSize={'3xl'}
          fontWeight={'700'}
          fontFamily={'sans-serif'}
        >
          Notable Drops
        </Text>
        <Divider borderColor={'#001529'} width={'10%'} />
      </Stack>
      <Stack direction={'row'} width={'100%'} px={20} py={10} gap={5}>
        <Stack width={'33%'}>
          <Stack
            bgImage={Promocard1}
            bgPosition={'center'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            h={'600px'}
            rounded={'md'}
            justifyContent={'space-between'}
          >
            <Stack p={5} alignItems={'end'}>
              <Button
                width={'fit-content'}
                bgColor={'#00000033'}
                borderRadius={'50px'}
                border={'2px solid white'}
                color={'white'}
                _hover={{
                  border: '1px solid white',
                  bgColor: '#00000033',
                  color: 'white',
                }}
                _focus={{
                  boxShadow: 'none',
                }}
                fontSize={'md'}
                size={'sm'}
              >
                Live
              </Button>
            </Stack>

            <Stack
              h={'100px'}
              bgImage={
                'linear-gradient(rgba(48, 51, 57, 0) 0%, rgb(49, 49, 54))'
              }
              justifyContent={'flex-end'}
              p={5}
            >
              <Text color={'white'} fontWeight={'600'} fontSize={'2xl'}>
                Ultiverse - Electric Sheep
              </Text>
            </Stack>
          </Stack>
        </Stack>

        <Stack width={'33%'}>
          <Stack
            bgImage={Promocard2}
            bgPosition={'center'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            h={'600px'}
            rounded={'md'}
            justifyContent={'space-between'}
          >
            <Stack p={5} alignItems={'end'}>
              <Button
                width={'fit-content'}
                bgColor={'#00000033'}
                borderRadius={'50px'}
                border={'2px solid white'}
                color={'white'}
                _hover={{
                  border: '1px solid white',
                  bgColor: '#00000033',
                  color: 'white',
                }}
                _focus={{
                  boxShadow: 'none',
                }}
                fontSize={'md'}
                size={'sm'}
              >
                Live
              </Button>
            </Stack>
            <Stack
              h={'100px'}
              bgImage={
                'linear-gradient(rgba(48, 51, 57, 0) 0%, rgb(127, 101, 156));'
              }
              justifyContent={'flex-end'}
              p={5}
            >
              <Text color={'white'} fontWeight={'600'} fontSize={'2xl'}>
                METAPRIDE LAND CHARITY
              </Text>
            </Stack>
          </Stack>
        </Stack>

        <Stack width={'33%'}>
          <Stack
            bgImage={Promocard3}
            bgPosition={'center'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            h={'600px'}
            rounded={'md'}
            justifyContent={'space-between'}
          >
            <Stack p={5} alignItems={'end'}>
              <Button
                width={'fit-content'}
                bgColor={'#00000033'}
                borderRadius={'50px'}
                border={'2px solid white'}
                color={'white'}
                _hover={{
                  border: '1px solid white',
                  bgColor: '#00000033',
                  color: 'white',
                }}
                _focus={{
                  boxShadow: 'none',
                }}
                fontSize={'md'}
                size={'sm'}
              >
                Live
              </Button>
            </Stack>
            <Stack
              h={'100px'}
              bgImage={
                ' linear-gradient(rgba(48, 51, 57, 0) 0%, rgba(62, 63, 64, 0.9) 75.16%)'
              }
              justifyContent={'flex-end'}
              p={5}
            >
              <Text color={'white'} fontWeight={'600'} fontSize={'2xl'}>
                Lacoste UNDW3 Official
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default NotableDrops;
