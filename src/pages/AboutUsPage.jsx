import React from "react";
import Header from "../components/Header";
import { Text, Stack, Box, Heading } from "@chakra-ui/react";

function AboutUsPage() {
    return (
        <>
            <Header />
            <Box p={8} maxW="700px" mx="auto" pt="20">
                <Heading fontSize="2xl" mb={4}>
                    About Us
                </Heading>
                <Stack spacing={4}>
                    <Text>
                        Welcome to [Your Company Name], your trusted partner in secure file management. We are dedicated to providing cutting-edge solutions for file storage and security, ensuring that your valuable data remains safe and accessible. Our mission is to simplify the process of securely saving files while making it accessible to a wide audience.
                    </Text>
                    <Heading as="h2" size="lg">
                        Our Vision
                    </Heading>
                    <Text>
                        At [Your Company Name], we envision a world where file management is not only secure but also user-friendly. We aim to bridge the gap between data protection and ease of access, offering a platform that empowers both individuals and businesses to manage their files with confidence.
                    </Text>
                    <Heading as="h2" size="lg">
                        Why Choose Us?
                    </Heading>
                    <Stack spacing={4}>
                        <Text>
                            1. <strong>State-of-the-Art Security:</strong> Your data's safety is our top priority. We employ advanced encryption and security measures to safeguard your files against unauthorized access.
                        </Text>
                        <Text>
                            2. <strong>User-Friendly Interface:</strong> We believe that security shouldn't come at the cost of usability. Our intuitive platform ensures that saving, accessing, and managing files is a breeze.
                        </Text>
                        <Text>
                            3. <strong>Accessibility:</strong> We make secure file management accessible to everyone. Whether you're an individual user, a small business, or a large enterprise, our solutions cater to your needs.
                        </Text>
                        <Text>
                            4. <strong>Customizable Solutions:</strong> We understand that one size doesn't fit all. Our services are customizable, so you can tailor your file management to suit your unique requirements.
                        </Text>
                        <Text>
                            5. <strong>Reliability:</strong> Count on us to keep your files safe and accessible around the clock. We offer reliability that you can depend on.
                        </Text>
                    </Stack>
                </Stack>
            </Box>
        </>
    );
}

export default AboutUsPage;
