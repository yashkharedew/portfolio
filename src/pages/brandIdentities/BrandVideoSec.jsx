import React from "react";
import {
  Box,
  Container,
  Text,
  AspectRatio,
  SimpleGrid,
  Flex,
  transform,
} from "@chakra-ui/react";

function BrandVideoSec() {
  return (
    <Box py="12" position={"relative"} className="BrandSec">
      <Box
        position={"absolute"}
        w="full"
        h="full"
        left={0}
        top="0"
        zIndex={"-1"}
      >
        <Box
          w={"full"}
          h="full"
          borderRadius={"full"}
          m="auto"
          position={"unset"}
          className="BrandVideoSec"
        >
          <video
            data-src="https://cdn.cuberto.com/cb/hello/overview/bg.mp4"
            autoPlay
            playsinline
            loop
            muted
            // className="BrandVideoSec"
            src="https://cdn.cuberto.com/cb/hello/overview/bg.mp4"
          ></video>
        </Box>
      </Box>
      <Container variant={"outerContainer"} overflow={"hidden"}>
        <Box mb="space160">
          <Box mb="2">
            <Text variant={"bodyTextSd"}>Brand</Text>
          </Box>
          <Box>
            <Text variant={"bodyTextSd"}>
              Identities
              <Text as="span" className="text-blur-out">
                {" "}
                _
              </Text>
            </Text>
          </Box>
        </Box>
        <Box
          className="sdBottom"
          sx={{
            _before: {
              display: "block",
              content: "''",
              width: "full",
              height: "1px",
              background: "primary.lightBlack",
              mb: "6",
            },
          }}
        >
          <Flex flexWrap={"wrap !important"} justifyContent={"space-between"}>
            <Box>
              <Box w="40px">
                <video
                  data-src="https://cdn.cuberto.com/cb/icons/4.mp4"
                  autoPlay
                  playsinline
                  loop
                  muted
                  src="https://cdn.cuberto.com/cb/icons/4.mp4"
                  style={{
                    mixBlendMode: "color-dodge",
                  }}
                ></video>
              </Box>
            </Box>
            <Box flex={{ sm: "unset", md: "1" }} maxWidth="814px">
              <Flex alignItems={"flex-start"} gap="4" mb="6">
                <Box flex="1" textAlign={"end"}>
                  <Text
                    variant={"bodyText3"}
                    fontSize="20px"
                    color="primary.white"
                    fontFamily={"nanum !!important"}
                    fontWeight="100"
                    textTransform="uppercase"
                  >
                    Smart Developement
                  </Text>
                </Box>
                <Box flex={"1"}>
                  <Box>
                    <Text
                      variant={"bodyText1"}
                      fontSize="24px"
                      lh="1.26"
                      color="primary.white"
                      fontFamily={"lato"}
                      transform="translateY(-4px)"
                    >
                      We don't do cookie-cutter solutions. Our user-centered
                      design encourages productivity and boosts revenue.
                    </Text>
                  </Box>
                </Box>
              </Flex>
              <Flex alignItems={"flex-start"} gap="4">
                <Box flex="1" textAlign={"end"}>
                  <Text
                    variant={"bodyText3"}
                    fontSize="20px"
                    color="primary.white"
                    fontFamily={"nanum !!important"}
                    fontWeight="100"
                    textTransform="uppercase"
                  >
                    Areas
                  </Text>
                </Box>
                <Box flex={"1"} transform="translateY(-8px)">
                  <Flex flexWrap={"wrap"}>
                    <Box>
                      <Text variant={"bodyTextSdTags"}>E-COMMERCE</Text>
                    </Box>
                    <Box>
                      <Text variant={"bodyTextSdTags"}>Finance</Text>
                    </Box>
                    <Box>
                      <Text variant={"bodyTextSdTags"}>Education</Text>
                    </Box>
                    <Box>
                      <Text variant={"bodyTextSdTags"}>Social</Text>
                    </Box>
                    <Box>
                      <Text variant={"bodyTextSdTags"}>Entetainment</Text>
                    </Box>
                    <Box>
                      <Text variant={"bodyTextSdTags"}>Medicine</Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}

export default BrandVideoSec;
