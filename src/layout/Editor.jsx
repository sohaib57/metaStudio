import { Stack } from '@chakra-ui/react';
import LayerAndAssets from '../components/body/LayerAndAssets';
import EditorHeader from '../components/header/EditorHeader';
import Header from '../components/header/ProfileHeader';

const Editor = () => {
  return (
    <>
      <Stack margin={'0px !important'} width={'100%'} height={'100vh'}>
        <Stack margin={'0px !important'} height={'100%'}>
          <EditorHeader />
          <LayerAndAssets />
        </Stack>
      </Stack>
    </>
  );
};

export default Editor;
