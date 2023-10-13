import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Text,
    Button,
    Stack,
    Avatar,
    useDisclosure,
    Input
} from '@chakra-ui/react';

function MainDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Open
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Your files are here :)</DrawerHeader>
  
            <DrawerBody>
            <Stack spacing={1} align="center">
                    <Avatar bg='teal.500' size='xl' mt={16} />
                    <Text fontSize='xl' mt={4}>Welcome, Ankur</Text>
                </Stack>
                <Stack mt={12}>
                    <Button ml={4} mr={4} mt={1} >Your Photos</Button>
                    <Button ml={4} mr={4} mt={1} >Your PDF documents</Button>
                    <Button ml={4} mr={4} mt={1} >Your Important Files</Button>
                    {/* <Button ml={4} mr={4} mt={1} ></Button> */}
                </Stack>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

export default MainDrawer;

               