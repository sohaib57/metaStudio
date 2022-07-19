import { Img, Stack, Text, chakra, Button } from '@chakra-ui/react';
import React from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import Trending1 from '../../assests/images/trending1.jpg';
import Trending2 from '../../assests/images/trending2.png';
import Trending3 from '../../assests/images/trending3.png';

const likes = 32;
const CollectionCard = () => {
  const nav = useNavigate();

  return (
    <>
      <Stack
        bgColor={'rgba(255, 255, 255)'}
        boxShadow={'0 0 8px #ccc'}
        _hover={{ boxShadow: '0 0 20px #ccc' }}
        w={{ base: '70vw', md: '35vw', lg: '30vw', '2xl': '18vw' }}
        h={'50vh'}
        borderRadius={'xl'}
        p={'4'}
        my={2}
      >
        {/* Info */}
        <Stack flex={'1'}>
          <Stack color={'white'} direction={'row'}>
            <Stack
              direction={'row'}
              w={'100%'}
              justify={'space-between'}
              cursor={'pointer'}
            >
              {/* Logo */}
              <Stack
                direction={'row'}
                onClick={() => nav('/explore/collection/user1')}
              >
                <Img src={Trending1} boxSize={'12'} borderRadius={'md'} />
                <Stack spacing={'0'} align={'center'}>
                  <Text
                    textTransform={'uppercase'}
                    color={'black'}
                    fontSize={'xs'}
                  >
                    User Collection
                  </Text>
                  <Text color={'rgba(131, 149, 167,1.0)'} fontSize={'xs'}>
                    Created by{' '}
                    <chakra.span
                      textTransform={'uppercase'}
                      fontWeight={'bold'}
                      color={'black'}
                    >
                      User 1
                    </chakra.span>
                  </Text>
                </Stack>
              </Stack>
              {/* Description */}
              <Stack align={'end'} justify={'start'}>
                <Button
                  size={'xs'}
                  bgColor={'rgba(83, 92, 104,0.5)'}
                  backdropBlur={'1px'}
                  _hover={{ bgColor: 'rgba(131, 149, 167,1.0)' }}
                  leftIcon={<IoMdHeartEmpty />}
                >
                  {likes}
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          flex={'3'}
          direction={'row'}
          onClick={() => nav('/explore/collection/user1')}
          cursor={'pointer'}
        >
          <Stack width={'38%'}>
            {/* <Img src={Trending1} borderRadius={'md'} h={'100%'} /> */}
            <Stack
              bgImage={Trending1}
              h={'full'}
              bgPosition={'center'}
              bgSize={'cover'}
              borderRadius={'md'}
            />
          </Stack>
          <Stack w={'58%'}>
            <Stack direction={'row'} h={'40%'}>
              {/* <Img src={Trending2} />
                                            <Img src={Trending3} /> */}
              {/* <Img src={Trending1} borderRadius={'md'} h={'100%'} />
                                            <Img src={Trending1} borderRadius={'md'} h={'100%'} /> */}
              <Stack
                bgImage={Trending2}
                h={'full'}
                w={'50%'}
                bgPosition={'center'}
                bgSize={'cover'}
                borderRadius={'md'}
              />
              <Stack
                bgImage={Trending1}
                h={'full'}
                w={'50%'}
                bgPosition={'center'}
                bgSize={'cover'}
                borderRadius={'md'}
              />
            </Stack>
            <Stack h={'60%'} w={'100%'}>
              {/* <Img src={Trending1} /> */}
              {/* <Img src={Trending1} borderRadius={'md'}/> */}
              <Stack
                bgImage={Trending3}
                h={'full'}
                bgPosition={'center'}
                bgSize={'cover'}
                borderRadius={'md'}
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default CollectionCard;
