import {
  AspectRatio,
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { React, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Grid, Thumbs } from "swiper/modules";
import CdBottom from "./CdBottom";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function CdSec() {
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
      cdCursor,
      {
        container: ".mainSec",
        duration: "unset",
        opacity: 1,
      },
      "-=1"
    );
  });

  //  Swiper Slider Autoplay

  const sliderSettings = {
    0: {
      slidesPerView: 1.25,
      spaceBetween: 16,
      grid: {
        rows: 1,
      },
      Autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      // centeredSlides: true,
    },
    568: {
      slidesPerView: 2,
      spaceBetween: 44,
      grid: {
        rows: 1,
      },
      Autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    },
    992: {
      slidesPerView: 2.1,
      grid: {
        rows: 1,
      },
      Autoplay: {
        speed: 2400,
        disableOnInteraction: false,
      },

      spaceBetween: 32,
    },
  };

  return (
    <Box bg="white" paddingY="10rem" className="CdSec" ref={myRef}>
      <Box className="cdCursorBlack" ref={(el) => (cdCursor = el)}></Box>
      <Box
        cursor={"pointer"}
        h={"auto"}
        maxW={"sliderWrap"}
        position={"relative"}
        margin="auto"
        sx={{
          ".sliderStyle": {
            position: "initial!important",
          },
          ".swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal":
            {
              bottom: ["-40px!important", null, null, "0!important"],
              zIndex: "five",
              width: "85%",
              left: "9%",
            },

          ".sliderStyle .swiper-wrapper": {
            display: "flex",
            alignItems: "center",
            mb: "-4",
            px: "4",
          },
          ".sliderStyle .swiper-slide": {
            display: "inline-block",
            h: "calc((100% - 24px) / 2) !important",
          },
          ".swiper-pagination-bullet": {
            width: "10px",
            backgroundColor: "primary.color4",
            opacity: "1",
            height: "10px",
            borderRadius: "0",
            transform: "rotate(45deg)",
            mt: "2px",
            display: "none",
          },
          ".swiper-pagination-bullet.swiper-pagination-bullet-active": {
            backgroundColor: "primary.color1",
          },

          ".sliderStyle .swiper-button-next, .swiper-button-prev": {
            color: "white!important",
            backgroundImage: "url('/carousel-arrow-right.svg')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            w: "32px",
            h: "32px",
            marginTop: "-8px",
            zIndex: "docked",
            display: "block",
          },
          ".sliderStyle .swiper-button-next": {
            right: { base: "16px", md: 0 },
            top: "unset",
            bottom: { base: "-45px", md: "0" },
          },
          ".sliderStyle .swiper-button-prev": {
            transform: "rotate(180deg)",
            left: { base: "16px", md: 0 },
            top: "unset",
            bottom: { base: "-45px", md: "0" },
          },
          ".swiper-button-next::after,.swiper-button-prev::after": {
            fontSize: "0!important",
          },
          ".swiper-slide": {
            mt: "0!important",
            mb: { base: 0, lg: "6" },
          },
          "css-1ddlo8e": {
            mb: "-0",
          },
        }}
      >
        <Swiper
          className="sliderStyle"
          spaceBetween={20}
          breakpoints={sliderSettings}
          navigation
          autoplay={{ delay: 1000 }}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Grid, Autoplay, Thumbs]}
        >
          <SwiperSlide>
            <AspectRatio
              className="video"
              w={"419px"}
              h="268px"
              ratio={16 / 10}
              overflow={"hidden"}
              borderRadius={"full"}
            >
              <video
                data-src="https://cdn.cuberto.com/cb/hello/overview/1.mp4"
                autoPlay
                playsinline
                loop
                muted
                src="https://cdn.cuberto.com/cb/hello/overview/1.mp4"
              ></video>
            </AspectRatio>
          </SwiperSlide>
          <SwiperSlide>
            <Heading
              as="h1"
              variant="h1"
              fontSize={{ base: "1rem", lg: "6rem" }}
              fontFamily="rubik !important"
              textAlign={{ base: "unset", lg: "start" }}
              textTransform="uppercase"
              color="black"
            >
              creative design
            </Heading>
          </SwiperSlide>
          <SwiperSlide>
            <AspectRatio
              className="video"
              w={"full"}
              h="268px"
              ratio={16 / 10}
              overflow={"hidden"}
              borderRadius={"full"}
            >
              <video
                data-src="https://cdn.cuberto.com/cb/hello/overview/1.mp4"
                autoPlay
                playsinline
                loop
                muted
                src="https://cdn.cuberto.com/cb/hello/overview/1.mp4"
              ></video>
            </AspectRatio>
          </SwiperSlide>
          <SwiperSlide>
            <Heading
              as="h1"
              variant="h1"
              fontSize={{ base: "1rem", lg: "6rem" }}
              fontFamily="rubik !important"
              textAlign={{ base: "unset", lg: "end" }}
              textTransform="uppercase"
              color="black"
            >
              creative design
            </Heading>
          </SwiperSlide>
          <SwiperSlide>
            <AspectRatio
              className="video"
              w={"419px"}
              h="268px"
              ratio={16 / 10}
              overflow={"hidden"}
              borderRadius={"full"}
            >
              <video
                data-src="https://cdn.cuberto.com/cb/hello/overview/1.mp4"
                autoPlay
                playsinline
                loop
                mpleGrid
                muted
                src="https://cdn.cuberto.com/cb/hello/overview/1.mp4"
              ></video>
            </AspectRatio>
          </SwiperSlide>
          <SwiperSlide>
            <Heading
              as="h1"
              variant="h1"
              fontSize={{ base: "1rem", lg: "6rem" }}
              fontFamily="rubik !important"
              textAlign={{ base: "unset", lg: "end" }}
              textTransform="uppercase"
              color="black"
            >
              creative design
            </Heading>
          </SwiperSlide>
          <SwiperSlide>
            <AspectRatio
              className="video"
              w={"419px"}
              h="268px"
              ratio={16 / 10}
              overflow={"hidden"}
              borderRadius={"full"}
            >
              <video
                data-src="https://cdn.cuberto.com/cb/hello/overview/1.mp4"
                autoPlay
                playsinline
                loop
                muted
                src="https://cdn.cuberto.com/cb/hello/overview/1.mp4"
              ></video>
            </AspectRatio>
          </SwiperSlide>
          <SwiperSlide>
            <Heading
              as="h1"
              variant="h1"
              fontSize={{ base: "1rem", lg: "6rem" }}
              fontFamily="rubik !important"
              textAlign={{ base: "unset", lg: "end" }}
              textTransform="uppercase"
              color="black"
            >
              creative design
            </Heading>
          </SwiperSlide>
        </Swiper>
      </Box>
      <Box>
        <Container variant={"outerContainer"} mt="6">
          {/* <MouseFollower /> */}
          <Box bg="#b7b7b7" w="full" h="1" borderRadius={"lg"}>
            <Box pt="13">
              <SimpleGrid columns={2} spacing={10}>
                <Flex>
                  <Box w="40px">
                    <CdBottom />
                  </Box>
                  <Box display={"inline-block"} flex="1" textAlign={"end"}>
                    <Text
                      variant={"bodyText3"}
                      textTransform="capitalize"
                      color={"primary.white"}
                    >
                      Creative Design
                    </Text>
                  </Box>
                </Flex>
                <Box>
                  <Text
                    variant={"bodyText1"}
                    fs="24px"
                    lh="1.26"
                    fontFamily={"lato"}
                  >
                    We don't do cookie-cutter solutions. Our user-centered
                    design encourages productivity and boosts revenue.
                  </Text>
                </Box>
              </SimpleGrid>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default CdSec;
