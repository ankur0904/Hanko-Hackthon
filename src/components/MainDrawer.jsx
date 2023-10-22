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
  Flex
} from '@chakra-ui/react';

function MainDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Flex justifyContent="center">
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen} m='3'>
          See your photos
        </Button>
      </Flex>
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
              <Text fontSize='xl' mt={4}>Welcome,</Text>
            </Stack>
            <Stack mt={12}>
              <Button as={'a'} ml={4} mr={4} mt={1} href={'list'}>Your Photos</Button>
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button as={'a'} colorScheme='blue' href={'contactus'}>Need Help</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MainDrawer;

