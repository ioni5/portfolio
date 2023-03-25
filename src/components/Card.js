import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box borderRadius={10} bg="#FFFFFF" color="#000000">
      <Image src={imageSrc}  borderRadius={10} objectFit='cover' />

      <Box p={6}>
        <VStack align="start" spacing={6}>
          <Heading as="h2" size="md">{title}</Heading>
          <Text color="gray">{description}</Text>
          <HStack>
            <Text>See more</Text>
            <FontAwesomeIcon icon={faArrowRight} />
          </HStack>
        </VStack>
        
      </Box>
    </Box>
  );
};

export default Card;
