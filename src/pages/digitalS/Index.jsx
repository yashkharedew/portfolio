import {
  AspectRatio,
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  Image,
  HStack,
} from "@chakra-ui/react";
import React from "react";
// import ReactPlayer from 'react-player'
import { useLayoutEffect, useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Index() {
  const myRef = useRef();

  let tl = gsap.timeline();
  let tl2 = gsap.timeline();
  let digitalSecursor = useRef(null);
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
        tl.set(digitalSecursor, {
          css: {
            left: posX - 50,
            top: posY - 50,
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
      digitalSecursor,
      {
        container: ".mainSec",
        duration: "unset",
        opacity: 1,
      },
      "-=1"
    );
  });

  useLayoutEffect(() => {
    const viewport = window.innerWidth;
    const tablet = 768;
    const ctx = gsap.context(() => {
      if (viewport > tablet) {
        gsap.set(".videoBox", { x: "-100px", y: "-80px" });
        gsap.set(".video", { width: "400px" });
        gsap.set(".btmTxt", { height: "0", opacity: "0.4" });

        gsap.to(".videoBox", {
          scrollTrigger: {
            trigger: ".videoBox",
            start: "top center", //when top of herman passes 75% viewport height
            end: "top center",
            toggleActions: "restart ",
            // markers: true,
          },
          duration: 2.1,
          // backgroundColor: "yellow",
          translateX: "0",
          translateY: "40px",
          ease: "none",
        });

        gsap.to(".video", {
          scrollTrigger: {
            trigger: ".videoBox",
            start: "top center", //when top of herman passes 75% viewport height
            end: "bottom center",
            toggleActions: "restart ",

            // markers: true,
          },
          duration: 2.1,
          width: "100%",
        });

        gsap.to(".btmTxt", {
          scrollTrigger: {
            trigger: ".btmTxt",
            toggleActions: "restart",
          },
          height: "auto",
          opacity: "1",
          duration: 1.2,
        });
      } else {
        gsap.set(".videoBox", { scale: 1, duration: 1 });
        gsap.to(".videoBox", {
          scrollTrigger: {
            trigger: ".videoBox",
            toggleActions: "restart",
            start: "top top top", //when top of herman passes 75% viewport height
            end: "bottom 25%",
          },
          scale: 1,
          duration: 1.2,
          translateY: "unset",
        });
      }
    }, myRef);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [myRef]);

  return (
    <>
      <Box
        bg={"background.lightBlack2"}
        py="12"
        ref={myRef}
        textAlign="left"
        sx={{
          h1: {
            fontWeight: "300 !important",
            fontFamily: "nanum ",
          },
        }}
      >
        <Box
          className="digitS-cursor-follow"
          ref={(el) => (digitalSecursor = el)}
        ></Box>
        <Container
          variant={"outerContainer"}
          className="IntroBox"
          smooth={true}
          offset={-70}
          duration={500}
          scrollBehavior="smooth"
          data-lag="0.8"
        >
          <HStack
            justifyContent={"end"}
            alignItems="center"
            mb="6"
            gap="1rem"
            cursor={"pointer"}
          >
            <Heading
              as="h1"
              variant="h1"
              fontSize={{ base: "1rem", lg: "2rem" }}
              fontFamily="rubik !important"
              textAlign={{ base: "unset", lg: "end" }}
              textTransform="uppercase"
            >
              Yash Khare
            </Heading>
            <Box w="40px" h="40px" borderRadius={"full"} overflow="hidden">
              <Image src="/img/profileYK.jpeg" alt="profile" />
            </Box>
          </HStack>
          <Stack
            direction={{ base: "column", lg: "row" }}
            gap={{ base: "4", lg: "8" }}
            alignItems={{ base: "left", lg: "center" }}
            mb={{ base: "4", lg: "unset" }}
          >
            <Heading
              as="h1"
              variant="h1"
              fontSize={{ base: "3rem", lg: "8rem" }}
              className="focus-in-expand"
            >
              We
            </Heading>
            <Button
              type="button"
              variant="primaryStyle"
              fontSize={{ base: "3rem !important", lg: "6rem !important" }}
              letterSpacing="8px"
              h={{ base: "auto", lg: "8rem" }}
              fontFamily="nanum !important"
            >
              CREATE
            </Button>
          </Stack>
          <Box mb="10">
            <Heading
              as="h1"
              variant="h1"
              mb="4"
              fontSize={{ base: "3rem", lg: "8rem" }}
            >
              Digital
            </Heading>
          </Box>
          <Box position={"relative"} zIndex={"modal"}>
            <Heading
              as="h1"
              variant="h1"
              fontSize={{ base: "3rem", lg: "8rem" }}
              mb={{ base: "4", lg: "unset" }}
            >
              <Text as="span" sx={{}} className="text-blur-out">
                _
              </Text>
              SOLUTIONS
            </Heading>
          </Box>
          <Box
            className="videoBox"
            display={"flex"}
            justifyContent="flex-end"
            transform={{ base: "translateY(0)", lg: "translateY(-72px)" }}
            zIndex="hide"
          >
            <AspectRatio
              className="video"
              w={"440px"}
              h="440px"
              ratio={1}
              overflow={"hidden"}
              borderRadius={"full"}
            >
              <video
                data-src="https://cdn.cuberto.com/cb/hello/intro/2.mp4"
                autoPlay
                playsinline
                loop
                muted
                src="https://cdn.cuberto.com/cb/hello/intro/2.mp4"
              ></video>
            </AspectRatio>
          </Box>
          <Box
            maxW={{ base: "full", lg: "76%" }}
            pt={"62px"}
            pb={{ base: "unset", lg: "140px" }}
            color="white"
            className="btmTxt"
          >
            <Text fontSize={{ base: "30px", lg: "58px" }} fontFamily="nanum">
              As a tight-knit team of experts, we create memorable and emotional
              websites, digital experiences, and native apps.
            </Text>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Index;
