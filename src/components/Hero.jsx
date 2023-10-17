import {
    Input,
    Container,
    VStack,
    Stack,
    Text,
    Heading
} from '@chakra-ui/react';
import HighlightTextHero from './HighlightTextHero';

function Hero() {
    return (
        <VStack ml='40'>
            <Container
                maxW='550px'
                height='300px'
                border="6px dotted"
                borderColor="gray.300"
                p="4"
            >
                <Stack p="8" textAlign="center" spacing="1">
                    <Heading fontSize="lg" color="gray.700" fontWeight="bold">
                        Drop images here
                    </Heading>
                    <Text fontWeight="light">or click to upload</Text>
                </Stack>
                <Input
                    type="file"
                    top="0"
                    left="0"
                    maxW='550px'
                    height='180px'
                    aria-hidden="true"
                    accept="image/*,.pdf,.doc,.docx,.txt"
                    opacity='0'
                />
            </Container>
            <HighlightTextHero />
        </VStack>
    );
}

export default Hero;
