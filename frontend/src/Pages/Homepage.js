import React from 'react';
import {  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text} from '@chakra-ui/react';
  import Signup from '../components/Authentication/Signup';
  import Login from '../components/Authentication/Login';
const Homepage = () => {
  return (
    <Container maxW= "xl" centerContent>
      <Box display="flex" 
      justifyContent="Center"
      p={3}
      bg={'black'}
      w="100%"
      m="40px 0 15px 0"
      borderRadius="lg"
      borderWidth="1px"
      
      >
        <Text fontSize='4xl' fontFamily="Work sans" color='white'> Chit-Chat</Text>
      </Box>
      <Box bg="black" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab color="white">Login</Tab>
            <Tab color="white">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

    </Container>
  )
}

export default Homepage
