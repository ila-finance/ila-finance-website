import React, { useEffect, useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { api } from './utils/api';
import state from './utils/state';

function App() {
  var [userName, setUserName] = useState('');

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    async function fetchLessonData() {
      const result = await api.get(`users/1`);
      state.placeHolder = result.data;
      setUserName(result.data.name);
    }
    fetchLessonData();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>Welcome Back to the iLa Finance Website, {userName}</Text>
            <Text>
              Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
            </Text>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
