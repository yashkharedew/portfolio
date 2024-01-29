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
import BrandIcon from "../../theme/icons/BrandIcon";
import { useLayoutEffect, useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function BrandVideoSec() {
  // Mouse Follower
  const myRef = useRef();

  let tl = gsap.timeline();
  let tl2 = gsap.timeline();
  let cdCursor = useRef(null);
  let posX = 0;
  let posY = 0;
  let mouseX = 0;
  let mouseY = 0;

  useEffect(() => {
    tl.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        posX += (mouseX - posX) / 10;
        posY += (mouseY - posY) / 10;
        tl.set(cdCursor, {
          css: {
            left: posX - 15,
            top: posY - 15,
          },
        });
      },
    });
    const div = myRef.current;
    div.addEventListener("mousemove", function (e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
    });

    tl2.from(
      cdCursor,
      {
        container: ".mainSec",
        duration: "unset",
        opacity: 1,
      },
      "-=1"
    );
  });

  return (
    <Box ref={myRef}>
      <Box className="cdCursorBlack" ref={(el) => (cdCursor = el)}></Box>

      <Box className="BrandSec" py="12" position={"relative"}>
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
                <Box minW="48px" className="rotate-center">
                  <BrandIcon />
                </Box>
              </Box>
              <Box flex={{ sm: "unset", md: "1" }}>
                <Flex
                  flexDirection={{ base: "column", md: "row" }}
                  alignItems={"flex-start"}
                  gap="4"
                  mb="6"
                >
                  <Box flex="1" textAlign={{ base: "start", md: "end" }}>
                    <Text
                      variant={"bodyText3"}
                      fontSize="36px"
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
                <Flex
                  flexDirection={{ base: "column", md: "row" }}
                  alignItems={"flex-start"}
                  gap="4"
                >
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
    </Box>
  );
}

export default BrandVideoSec;
