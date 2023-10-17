import React from "react";
import Header from "../components/Header";
import { Text, Stack, Box, Heading, Link } from "@chakra-ui/react";

function ContactUsPage() {
    return (
        <>
            <Header />
            <Box p={8} maxW="700px" mx="auto" pt='20'>
                <Heading fontSize="2xl" mb={4}>Contact Us</Heading>
                <Stack spacing={4}>
                    <Text>
                        Have a question, suggestion, or just want to say hello? We'd love to hear from you! Feel free to reach out to us via email or through the contact form below.
                    </Text>
                    <Text>
                        <strong>Email:</strong> <Link href="mailto:abcd@email.com">abcd@email.com</Link>
                    </Text>
                    <Text>
                        <strong>Our Location:</strong> While we primarily communicate through email and our contact form, you can also visit us in person. Here's our office address:
                    </Text>
                    <Text>
                        123 Main Street<br />
                        Your City, State, Zip Code
                    </Text>
                    <Text>
                        Please note that it's a good idea to schedule an appointment if you plan to visit our physical location to ensure we're available to assist you.
                    </Text>
                    <Text>
                        <strong>Connect on Social Media:</strong> Stay updated and engaged with us on social media. Follow us on:
                    </Text>
                    <Stack direction="row" spacing={2}>
                        <Link href="#">Facebook</Link>
                        <Link href="#">Twitter</Link>
                        <Link href="#">Instagram</Link>
                        <Link href="#">LinkedIn</Link>
                    </Stack>
                    <Text>
                        <strong>Business Hours:</strong> Our team is here to help you during the following hours:
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
                        <strong>Frequently Asked Questions:</strong> Before reaching out, you might find answers to your questions in our <Link href="/faq">FAQ section</Link>. Check it out to see if your query has already been addressed.
                    </Text>
                    <Text>
                        We appreciate your feedback and look forward to assisting you in any way we can. Your opinions and inquiries are valuable to us. Thank you for choosing to connect with us!
                    </Text>
                </Stack>
            </Box>
        </>
    )
}

export default ContactUsPage;
