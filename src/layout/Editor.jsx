import { Stack } from '@chakra-ui/react';
import { useContext } from 'react';
import LayerAndAssets from '../components/body/LayerAndAssets';
import MobileSiderbar from '../components/body/MobileSiderbar';
import EditorHeader from '../components/header/EditorHeader';
import ContextCanvas from '../context/ContextCanvas';

const Editor = () => {
  const [canvas] = useContext(ContextCanvas);
  function keyDownHandler(event) {
    if (event.key === "Delete") {
      console.log("keydown3")
      canvas.getActiveObjects().forEach(obj => {
        canvas.remove(obj);
      });
      canvas.discardActiveObject().renderAll();
    }
  }
  return (
    <>
      <Stack margin={'0px !important'} width={'100%'} height={'100vh'}>
        <Stack margin={'0px !important'} height={'100%'} onKeyDown={keyDownHandler}>
          <EditorHeader />
          <LayerAndAssets />
          <MobileSiderbar/>
        </Stack>
      </Stack>
    </>
  );
};

export default Editor;
