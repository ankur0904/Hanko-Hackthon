import {
    Input,
    Container,
    VStack,
    Stack,
    Text,
    Heading,
    Box, // Import the Box component
    Mark, // Import the Mark component
    useHighlight
} from '@chakra-ui/react';

function HighlightTextHero() {
    const chunks = useHighlight({
        text: 'Securely upload your files with peace of mind.',
        query: ['Securely', 'files']
    })

    return (
        <Heading lineHeight="tall" mt='16'>
            {chunks.map(({ match, text }) => {
                if (!match) return text
                return text === 'instantly' ? (
                    <Box as='u' fontFamily='NewYork'>
                        {text}
                    </Box>
                ) : (
                    <Mark bg='black' color="white" fontFamily='NewYork' px='2' py='1'>
                        {text}
                    </Mark>
                )
            })}
        </Heading>
    )
}

export default HighlightTextHero;
