import { Box } from "@chakra-ui/react";
import React, { useRef, useEffect } from "react";
import CdSec from "./CdSec";
import gsap from "gsap";

function MainSec() {
  let tl = gsap.timeline();
  let tl2 = gsap.timeline();
  let cdSecursor = useRef(null);
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
        tl.set(cdSecursor, {
          css: {
            left: posX - 50,
            top: posY - 50,
          },
        });
      },
    });
    window.addEventListener("mousemove", function (e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
    });

    tl2.from(
      cdSecursor,
      {
        container: ".mainSec",
        duration: "unset",
        opacity: 1,
      },
      "-=1"
    );
  });
  return (
    <>
      <Box minH="400vh" bg="black" className="mainSec">
        <Box
          className="secondSec-cursor-follow"
          ref={(el) => (cdSecursor = el)}
        ></Box>
      </Box>
    </>
  );
}

export default MainSec;
