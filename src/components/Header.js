import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import { Slide, useDisclosure } from '@chakra-ui/react';
const socials = [
  {
    icon: faEnvelope,
    url: "mailto: ioni5.goto@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/ioni5",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => {
    const id = `${anchor}`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollYRef = useRef(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  function scrollHandler() {
    const isScrollingDown = window.scrollY > scrollYRef.current;
    isScrollingDown ? onClose() : onOpen();
    scrollYRef.current = window.scrollY;
  }

  React.useEffect(() => {
    onOpen();
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <Slide direction='top' in={isOpen} style={{ zIndex: 10 }}>
      <Box backgroundColor="#18181b">
        <Box color="white" maxWidth="1280px" margin="0 auto">
          <HStack
            justifyContent="space-between"
            px="4rem"
            py="1rem"
          >
            <nav>
              {/* Add social media links based on the `socials` data */}
              <HStack spacing={4}>
                {socials.map((s, idx) => <a key={idx} href={s.url}><FontAwesomeIcon icon={s.icon} size="2x" /></a>)}
              </HStack>
            </nav>
            <nav>
              <HStack spacing={8}>
                {/* Add links to Projects and Contact me section */}
                <a onClick={() => handleClick("projects-section")} >Projects</a>
                <a onClick={() => handleClick("contactme-section")} >Contact me</a>
              </HStack>
            </nav>
          </HStack>
        </Box>
      </Box>
    </Slide>

  );
};
export default Header;
