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
              CO
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
          <Box
            display={"flex"}
            flexDirection={{ base: "column", md: "row" }}
            alignItems={{ base: "start", md: "center" }}
            gap="4"
          >
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
      <Box mx={"4"}>
        <Box position={"relative"}>
          <AspectRatio
            className="video"
            w={"full"}
            h="auto"
            ratio={16 / 7}
            overflow={"hidden"}
            borderRadius={"32px"}
          >
            <video
              data-src="https://cdn.cuberto.com/cb/hello/showcase/qvino.mp4"
              autoPlay
              playsinline
              loop
              muted
              src="https://cdn.cuberto.com/cb/hello/showcase/qvino.mp4"
            ></video>
          </AspectRatio>
          <Box position={"absolute"} top={"25%"} left={"14%"}>
            <Text
              variant={"bodyTextSd"}
              textTransform={"uppercase"}
              fontWeight={"bold"}
            >
              View Case
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CoolProjectSec;
