import {
    Input,
    Container,
    VStack,
    Stack,
    Text,
    Heading,
    useToast
} from '@chakra-ui/react';
import { createClient } from '@supabase/supabase-js'
import HighlightTextHero from './HighlightTextHero'
import { useEffect, useState } from 'react';

const supabaseUrl = 'https://aysmbympqhddbtawzxrm.supabase.co'
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)
console.log(process.env.REACT_APP_SUPABASE_KEY);


function Hero() {
    const toast = useToast()
    const [userName, setUserName] = useState('');
    useEffect(() => {
        setUserName('new');
    }, [userName]);
    const handleFileUpload = (event) => {
        console.log(event.target.files[0].name);
        const avatarFile = event.target.files[0]
        const { data, error } = supabase.storage.from('avatars').upload(`${userName}/${event.target.files[0].name}`, avatarFile, {
            cacheControl: '3600',
            upsert: false
        })
        if (!error) {
            toast({
                title: 'Image uploaded 😊',
                description: "We've created your account for you.",
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
        }else{
            toast({
                title: 'Sorry!  😔',
                description: error.message,
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
    }
    return (
        <VStack m='8'>
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
                    onChange={handleFileUpload} // add onChange event listener
                />
            </Container>
            <HighlightTextHero />
        </VStack>
    );
}

export default Hero;
