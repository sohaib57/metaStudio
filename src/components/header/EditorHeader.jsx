import { useContext, useEffect } from 'react';
import { Button, IconButton, Img, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react';
import logo from '../../assests/images/logo.png';
import SaveFile from '../objects/SaveFile'
import { AiFillDelete, FaObjectUngroup } from 'react-icons/all'
import ContextCanvas from '../../context/ContextCanvas';
import {
  FaAngleDoubleUp,
  FaAngleDoubleDown,
  FaRegClone,
  FaObjectGroup,
  BiAlignMiddle,
  AiOutlineAlignRight,
  AiOutlineAlignLeft,
  AiOutlineAlignCenter
} from 'react-icons/all'

// import Wallet from '../objects/Wallet';
import Profile from '../objects/Profile';
import { useNavigate } from 'react-router-dom';
// import Actions from '../actions/Actions';

var align = ["left", "center", "right"];

const EditorHeader = () => {
  const [canvas] = useContext(ContextCanvas)

  const nav = useNavigate()

  const deleteObject = () => {

    canvas.getActiveObjects().forEach(obj => {
      canvas.remove(obj);
    });
    canvas.discardActiveObject().renderAll();
  }
  const bringToTop = () => {
    var canvasTop = canvas;
    var activeObj = canvasTop.getActiveObject();
    activeObj &&
      canvasTop.bringToFront(activeObj).discardActiveObject(activeObj).renderAll();
  }
  const sendToBack = () => {
    var canvasBack = canvas;
    var activeObj = canvasBack.getActiveObject();
    activeObj &&
      canvasBack.sendToBack(activeObj).discardActiveObject(activeObj).renderAll();


  }
  const cloneMultipleObject = () => {

    var activeObjects = canvas.getActiveObjects();

    if (activeObjects) {
      activeObjects.forEach(function (object) {

        object.clone(function (clone) {
          canvas.add(clone.set({
            left: object.left + 100,
            top: object.top + 200
          }));
        })

      });

    }
  }
  const doGroup = () => {

    var activeObj = canvas.getActiveObject();
    var activegroup = activeObj.toGroup();
    var objectsInGroup = activegroup.getObjects();
    activegroup.clone(function (newgroup) {
      canvas.remove(activegroup);
      objectsInGroup.forEach(function (object) {
        canvas.remove(object);
      });
      canvas.add(newgroup);
    });

  }
  const doUnGroup = () => {
    var activeObject = canvas.getActiveObject();
    if (activeObject.type == "group") {
      var items = activeObject._objects;
      activeObject._restoreObjectsState();
      canvas.remove(activeObject);
      for (var i = 0; i < items.length; i++) {
        canvas.add(items[i]);
        canvas.item(canvas.size() - 1).hasControls = true;
      }
      canvas.renderAll();
    }


  }
  const alignTextLeft = () => {

    var text = canvas.getActiveObject();
    changeAlign();

    function changeAlign() {
      var val = align[0];
      text.set('textAlign', val);
      canvas.setActiveObject(text);
      canvas.renderAll();

    }

  }
  const alignTextCenter = () => {

    var text = canvas.getActiveObject();

    changeAlign();

    function changeAlign() {
      var val = align[1];
      text.set('textAlign', val);
      canvas.setActiveObject(text);
      canvas.renderAll();

    }

  }
  const alignTextRight = () => {

    var text = canvas.getActiveObject();
    changeAlign();

    function changeAlign() {
      var val = align[2];
      text.set('textAlign', val);
      canvas.setActiveObject(text);
      canvas.renderAll();

    }

  }


  return (
    <>
      {/* Header */}
      <Stack
        className="Header-Stack"
        minH={'16'}
        bgColor={'#001529'}
        align={'center'}
        px={'3'}
        direction={'row'}
        justify={'end'}
      >
        <Img onClick={() => nav('/')} cursor={'pointer'} src={logo} position={'absolute'} left={'1'} boxSize={'36'} />
        <Stack direction={'row'} className="Header-Buttons-Stack">
          <Profile />
          {/* <Wallet /> */}
        </Stack>
      </Stack>
      {/* Save and upload file  */}
      <Stack
        className="Save-and-upload-Stack"
        margin={'0px !important'}
        color={'black'}
        bgColor={'#205375'}
        direction={'row'}
        justify={'flex-end'}
        pr={'2'}
      >

        <IconButton onClick={alignTextLeft} variant={'ghost'} icon={< AiOutlineAlignLeft />} />
        <IconButton onClick={alignTextCenter} variant={'ghost'} icon={< AiOutlineAlignCenter />} />
        <IconButton onClick={alignTextRight} variant={'ghost'} icon={< AiOutlineAlignRight />} />
        <IconButton onClick={doGroup} variant={'ghost'} icon={<FaObjectGroup />} />
        <IconButton onClick={doUnGroup} variant={'ghost'} icon={<FaObjectUngroup />} />
        <IconButton onClick={cloneMultipleObject} variant={'ghost'} icon={<FaRegClone />} />
        <IconButton onClick={bringToTop} variant={'ghost'} icon={< FaAngleDoubleUp />} />
        <IconButton onClick={sendToBack} variant={'ghost'} icon={< FaAngleDoubleDown />} />
        <IconButton onClick={deleteObject} variant={'ghost'} icon={<AiFillDelete />} />
        <button
          variant={'ghost'}
        >
          <SaveFile />
        </button>
      </Stack>
    </>
  )
}

export default EditorHeader;
