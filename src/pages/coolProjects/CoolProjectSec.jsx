import { AspectRatio, Box, Container, Image, Text } from "@chakra-ui/react";
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
            <Text variant={"bodyTextSd"} display="flex" alignItems={"center"}>
              Co
              <Box
                className="coolRotate rotate-center"
                Box
                w="110px"
                h={"110px"}
                mixBlendMode={"lighten"}
              >
                <Image src="img/coolRotate.png" w="full" h="full"></Image>
              </Box>
              <Text variant={"bodyTextSd"}>LEST</Text>
            </Text>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap="4">
            <Box>
              <AspectRatio
                className="video"
                w={"185px"}
                h="auto"
                ratio={4 / 3}
                overflow={"hidden"}
                borderRadius={"full"}
              >
                <video
                  data-src="https://cdn.cuberto.com/cb/hello/showcase/header.mp4"
                  autoPlay
                  playsinline
                  loop
                  muted
                  src="https://cdn.cuberto.com/cb/hello/showcase/header.mp4"
                ></video>
              </AspectRatio>
            </Box>
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
