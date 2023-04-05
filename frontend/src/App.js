import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <Flex justifyContent={'space-between'} p={5} pl={10}>
            <Text fontFamily={'cursive'} fontWeight={'medium'}>
              Wanderlustic
            </Text>
            <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
          <VStack spacing={8}>
            <AllRoutes />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
