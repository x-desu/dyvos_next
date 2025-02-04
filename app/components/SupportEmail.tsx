import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
  Hr,
} from "@react-email/components";
import * as React from "react";

interface SupportEmailProps {
  name: string;
  email: string;
  message: string;
  subject: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const SupportEmail = ({
  name,
  email,
  message,
  subject,
}: SupportEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Support Request Received</Preview>
      <Body style={main}>
        <Container className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          {/* Header with Company Logo */}
          <Section className="text-center mb-6">
            <Img
              src={
                "https://ik.imagekit.io/m5jelgvcv/logo.jpeg?updatedAt=1736081673259"
              } // Replace with your public logo URL
              alt="Company Logo"
              width={150}
              style={{ display: "block", margin: "0 auto" }}
            />
          </Section>

          <Section>
            <Row className="mb-4">
              <Column>
                <Heading className="text-3xl text-center font-bold w-full text-gray-800 mb-4">
                  New Support Request
                </Heading>

                <Text className="text-lg text-gray-700 mb-2">
                  <strong>Subject:</strong> {subject}
                </Text>
                <Text className="text-lg text-gray-700 mb-2">
                  <strong>Name:</strong> {name}
                </Text>
                <Text className="text-lg text-gray-700 mb-4">
                  <strong>Email:</strong> {email}
                </Text>

                <Hr className="my-4" />

                <Section>
                  <Text className="text-gray-700">
                    <strong>Message:</strong>
                  </Text>
                  <Text className="text-gray-700">{message}</Text>
                </Section>
              </Column>
            </Row>
          </Section>

          {/* Footer */}
          <Section className="mt-8 border-t pt-6 text-center w-full">
            <Text className="text-sm text-gray-600">
              © {new Date().getFullYear()} Your Company. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default SupportEmail;

const main = {
  backgroundColor: "#f9fafb",
  fontFamily:
    "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif",
};
