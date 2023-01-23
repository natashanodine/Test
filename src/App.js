import React from 'react';
import {
  ChakraProvider,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Box,
  Container,
  Badge,
  Divider,
  Flex,
  Spacer,
  Button,
} from '@chakra-ui/react';
import { QuestionOutlineIcon } from '@chakra-ui/icons';
import './style.css';

export default function App() {
  return (
    <ChakraProvider>
      <Container className="containerStyle">
        <Box className="boxStyle">
          <Card>
            <Badge className="styleBadge">Good Fit</Badge>
            <CardHeader>
              <Text className="styleHeaderCard">Revenue Based Financing</Text>
            </CardHeader>
            <CardBody>
              <Text>
                <QuestionOutlineIcon /> By Lendistry
              </Text>
              <Text>Location</Text>
              <Text>
                Get funded in <b>12 days</b>
              </Text>
            </CardBody>
            <Divider orientation="horizontal" />
            <CardFooter>
              <Text className="styleFooterCard">$10,000 - $1,000,0000</Text>
            </CardFooter>
          </Card>
          <Box className="textStyle">
            <Flex>
              <Box>
                <Text className="styleHeaderBox">About the Lender</Text>
              </Box>
              <Spacer />
              <Box>
                <Button className="styleButtom">Learn More</Button>
              </Box>
            </Flex>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut.
            </Text>
            <Box>
              <Badge className="styleBadgeBox">Lender Benefit</Badge>
            </Box>
            <Box>
              <Badge className="styleBadgeBox">Lender Benefit</Badge>
            </Box>
            <Box>
              <Badge className="styleBadgeBox">Lender Benefit</Badge>
            </Box>
          </Box>
        </Box>
      </Container>
    </ChakraProvider>
  );
}
