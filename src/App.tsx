import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Stack,
  Button,
  VStack,
  Text,
  Textarea,
  Grid,
  theme,
  Image,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import logo from './logo.png';
import { api } from './utils/api';
import state from './utils/state';

function App() {
  var [emailSentiment, setEmailSentiment] = useState('');
  var [displayMessage, setDisplayMessage] = useState('');
  var [isLoading, setIsLoading] = useState(false);
  let [textInputValue, setTextInputValue] = React.useState('');

  let handleInputChange = (e: any) => {
    let textInputValue = e.target.value;
    setTextInputValue(textInputValue);
  };

  let analyseText = async () => {
    setIsLoading(true);
    const response = await api.post('/', { body: textInputValue });
    state.emailAnalysis = response.data;
    setDisplayMessage(response.data.display_message);
    setEmailSentiment(response.data.sentiment.Sentiment);
    setIsLoading(false);
  };

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-start" />
          <VStack spacing={8}>
            <Image src={logo} alt="iLa Finance Logo" />
            <Textarea
              value={textInputValue}
              onChange={handleInputChange}
              placeholder="Input Email Text"
              size="lg"
              width="50%"
              borderColor={'pink'}
            />
            <Stack direction="row" spacing={4}>
              <Button
                isLoading={isLoading}
                loadingText="Submitting"
                colorScheme="pink"
                variant="outline"
                onClick={() => analyseText()}
              >
                Analyse Email
              </Button>
            </Stack>
            {displayMessage && emailSentiment && (
              <Box>
                <Text>Display Message: {displayMessage}</Text>
                <Text>Email Sentiment: {emailSentiment}</Text>
              </Box>
            )}
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
