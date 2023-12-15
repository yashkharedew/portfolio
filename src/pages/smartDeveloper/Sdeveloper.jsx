import {
  Box,
  Container,
  Text,
  AspectRatio,
  SimpleGrid,
  Flex,
  transform,
} from "@chakra-ui/react";
import React from "react";
import { useLayoutEffect, useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Sdeveloper() {
  // write gsap Animation here only
  const sDRef = useRef();

  let tl = gsap.timeline();
  let tl2 = gsap.timeline();
  let sdSecursor = useRef(null);
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
        tl.set(sdSecursor, {
          css: {
            left: posX - 150,
            top: posY - 50,
          },
        });
      },
    });
    const div = sDRef.current;
    div.addEventListener("mousemove", function (e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
    });

    tl2.from(
      sdSecursor,
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
    }, sDRef);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [sDRef]);

  return (
    <>
      <Box py="12" bg="background.lightBlack2" ref={sDRef} overflow="hidden">
        <Container
          variant={"outerContainer"}
          className="IntroBox"
          overflow={"hidden"}
        >
          <Box mb="space160">
            <Box mb="2">
              <Text variant={"bodyTextSd"}>Smart</Text>
            </Box>
            <Box>
              <Text variant={"bodyTextSd"}>
                Developement
                <Text as="span" className="text-blur-out">
                  {" "}
                  _
                </Text>
              </Text>
            </Box>
          </Box>
          {/* <Box
            className="sdVideoBox"
            display={"flex"}
            justifyContent="Center"
            transform={{ base: "translateY(0)", lg: "translateY(-72px)" }}
            zIndex="hide"
            mb={"72px"}
            p="36px"
            bg="#1b1b1b"
            borderRadius={"1000px"}
          >
            <AspectRatio
              className="video"
              w={"347px"}
              ratio={1}
              overflow={"hidden"}
              borderRadius={"full"}
            >
              <video
                data-src="https://cdn.cuberto.com/cb/hello/overview/2.webm"
                autoPlay
                playsinline
                loop
                muted
                src="https://cdn.cuberto.com/cb/hello/overview/2.webm"
              ></video>
            </AspectRatio>
          </Box> */}
          <Box minH={"600px"} d="inline-block">
            <Box
              className="sd-cursor-follow whiteCursorFollow "
              display={"inlineBlock"}
              justifyContent="Center"
              // transform={{ base: "translateY(0)", lg: "translateY(-72px)" }}
              mb={"72px"}
              p="36px"
              bg="#1b1b1b"
              borderRadius={"1000px"}
              maxWidth="full"
              ref={(el) => (sdSecursor = el)}
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
                  data-src="https://cdn.cuberto.com/cb/hello/overview/2.webm"
                  autoPlay
                  playsinline
                  loop
                  muted
                  src="https://cdn.cuberto.com/cb/hello/overview/2.webm"
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
                background: "primary.white",
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
    </>
  );
}

export default Sdeveloper;
