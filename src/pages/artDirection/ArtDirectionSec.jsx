import React from "react";
import { AspectRatio, Box, Container, Flex, Text } from "@chakra-ui/react";
import { useLayoutEffect, useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ArtDIcon from "../../theme/icons/ArtDIcon";
gsap.registerPlugin(ScrollTrigger);

function ArtDirectionSec() {
  // write gsap Animation here only
  const artDRef = useRef();

  let tl = gsap.timeline();
  let tl2 = gsap.timeline();
  let artDCursor = useRef(null);
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
        tl.set(artDCursor, {
          css: {
            left: posX - 150,
            top: posY - 50,
          },
        });
      },
    });
    const div = artDRef.current;
    div.addEventListener("mousemove", function (e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
    });

    tl2.from(
      artDCursor,
      {
        container: ".IntroBox",
        opacity: 1,
        scale: 1,
      },
      "-=1"
    );
  });

  useLayoutEffect(() => {
    const viewport = window.innerWidth;
    const tablet = 768;
    const ctx = gsap.context(() => {
      if (viewport > tablet) {
        gsap.set(".sd-cursor-follow", {
          opacity: 1,
          scaleX: 1,
          transform: "translate(0)",
        });

        // Mouse opacity animation
        gsap.set(".videoMouse", { opacity: 1, scale: 1 });

        gsap.to(".sd-cursor-follow", {
          scrollTrigger: {
            trigger: ".sdBottom",
            toggleActions: "restart",
            scrub: 0.6,
            start: "end center",
            end: " center",
          },
          scale: 0.7,
          opacity: 1,

          // width: "348px",
          padding: "4",
          position: "absolute",
          // delay: 0.3,
          // duration: 1,
          translateY: "-270px",
        });

        // Mouse Animation
        gsap.to(".videoMouse", {
          scrollTrigger: {
            trigger: ".sdBottom",
            toggleActions: "restart ",
            scrub: 1.1,
            start: "end center",
            end: " center",
          },
          scale: 1,
          opacity: 1,
          ease: "2s linear",
        });
      } else {
        gsap.set(".sdVideoBox", { opacity: "1" });
        gsap.to(".sdVideoBox", {
          scrollTrigger: {
            trigger: ".sdBottom",
            toggleActions: "restart",
            start: "top top top", //when top of herman passes 75% viewport height
            end: "bottom 25%",
          },
          delay: 2,
          duration: 5.8,
          opacity: 1,
          translateX: 0,
          translateY: "-40px",
        });
      }
    }, artDRef);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [artDRef]);

  return (
    <>
      <Box py="12" bg="#ffffff" ref={artDRef} overflow="hidden">
        <Container
          variant={"outerContainer"}
          className="IntroBox"
          overflow={"hidden"}
        >
          <Box mb="space160">
            <Box mb="2">
              <Text variant={"bodyTextSd"} color="black !important">
                Art
              </Text>
            </Box>
            <Box>
              <Text variant={"bodyTextSd"} color="black !important">
                Direction
                <Text as="span" className="text-blur-out">
                  {" "}
                  _
                </Text>
              </Text>
            </Box>
          </Box>

          <Box minH={"500px"} d="inline-block">
            <Box
              className="sd-cursor-follow"
              display={"inlineBlock"}
              justifyContent="Center"
              // transform={{ base: "translateY(0)", lg: "translateY(-72px)" }}
              mb={"72px"}
              p="36px"
              bg="#f1f1f1"
              borderRadius={"1000px"}
              maxWidth="full"
              ref={(el) => (artDCursor = el)}
            >
              <AspectRatio
                className="video"
                w={"347px"}
                ratio={1}
                overflow={"hidden"}
                borderRadius={"full"}
                m="auto"
              >
                <video
                  data-src="https://cdn.cuberto.com/cb/hello/overview/3.webm"
                  autoPlay
                  playsinline
                  loop
                  muted
                  src="https://cdn.cuberto.com/cb/hello/overview/3.webm"
                ></video>
              </AspectRatio>
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
                background: "black",
                mb: "6",
              },
            }}
          >
            <Flex flexWrap={"wrap !important"} justifyContent={"space-between"}>
              <Box>
                <Box w="40px" className="rotate-center">
                  <ArtDIcon />
                </Box>
              </Box>
              <Box flex={{ sm: "unset", md: "1" }}>
                <Flex
                  flexDirection={{ base: "column", md: "row" }}
                  alignItems={"flex-start"}
                  gap="4"
                  mb="6"
                  color={"black !important"}
                >
                  <Box flex="1" textAlign={{ base: "start", md: "end" }}>
                    <Text
                      variant={"bodyText3"}
                      fontSize="36px"
                      color="black"
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
                        color="black"
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
                  <Box flex="1" textAlign={{ base: "start", md: "end" }}>
                    <Text
                      variant={"bodyText3"}
                      fontSize="20px"
                      color="black"
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
                        <Text variant={"bodyTextArtTags"}>E-COMMERCE</Text>
                      </Box>
                      <Box>
                        <Text variant={"bodyTextArtTags"}>Finance</Text>
                      </Box>
                      <Box>
                        <Text variant={"bodyTextArtTags"}>Education</Text>
                      </Box>
                      <Box>
                        <Text variant={"bodyTextArtTags"}>Social</Text>
                      </Box>
                      <Box>
                        <Text variant={"bodyTextArtTags"}>Entetainment</Text>
                      </Box>
                      <Box>
                        <Text variant={"bodyTextArtTags"}>Medicine</Text>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default ArtDirectionSec;
