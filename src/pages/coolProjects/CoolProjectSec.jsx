import { Box, Container, Image, Text } from "@chakra-ui/react";
import React from "react";

function CoolProjectSec() {
  return (
    <Box py="12" bg="background.lightBlack2" overflow="hidden">
      <Container
        variant={"outerContainer"}
        className="IntroBox"
        overflow={"hidden"}
      >
        <Box mb="space160">
          <Box mb="2">
            <Text variant={"bodyTextSd"} d="flex">
              Co
              <Box
                className="coolRotate"
                Box
                w="120px"
                h={"120px"}
                d="inline-block"
              >
                <Image src="img/coolRotate.png" w="full" h="full"></Image>
              </Box>
            </Text>
          </Box>
          <Box>
            <Text variant={"bodyTextSd"}>
              Projects
              <Text as="span" className="text-blur-out">
                {" "}
                _
              </Text>
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default CoolProjectSec;
