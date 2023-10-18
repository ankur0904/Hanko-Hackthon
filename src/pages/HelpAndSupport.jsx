import React from "react";
import Header from "../components/Header";
import { Text, Stack, Box, Heading, Link } from "@chakra-ui/react";

function HelpAndSupport() {
    return (
        <>
            <Header />
            <Box p={8} maxW="700px" mx="auto" pt="20">
                <Heading fontSize="2xl" mb={4}>
                    Help & Support
                </Heading>
                <Stack spacing={4}>
                    <Text>
                        Welcome to the Help & Support section of [Your Company Name]. We are here to assist you with any questions, concerns, or issues you may have. Your satisfaction is our top priority, and we're committed to providing the best support possible.
                    </Text>
                    <Text>
                        <strong>Customer Support:</strong> Our dedicated support team is available to help you with any inquiries or problems you encounter. You can reach out to us through the following channels:
                    </Text>
                    <Stack spacing={2} pl={4}>
                        <Text>
                            <strong>Email:</strong> <Link href="mailto:support@yourcompany.com">support@yourcompany.com</Link>
                        </Text>
                        <Text>
                            <strong>Phone:</strong> <Link href="tel:+1234567890">+123 456 7890</Link>
                        </Text>
                        <Text>
                            <strong>Live Chat:</strong> You can also chat with our support team through the live chat feature on our website during business hours.
                        </Text>
                    </Stack>
                    <Text>
                        <strong>Knowledge Base:</strong> Before contacting support, you may find answers to common questions in our <Link href="/knowledge-base">Knowledge Base</Link>. It's a valuable resource for self-help and troubleshooting.
                    </Text>
                    <Text>
                        <strong>Business Hours:</strong> Our support team is available during the following hours:
                    </Text>
                    <Text>
                        Monday - Friday: 9:00 AM - 5:00 PM
                    </Text>
                    <Text>
                        Saturday: 10:00 AM - 2:00 PM
                    </Text>
                    <Text>
                        Sunday: Closed
                    </Text>
                    <Text>
                        We appreciate your feedback and look forward to assisting you in any way we can. Your opinions and inquiries are valuable to us. Thank you for choosing to connect with us!
                    </Text>
                </Stack>
            </Box>
        </>
    );
}

export default HelpAndSupport;
