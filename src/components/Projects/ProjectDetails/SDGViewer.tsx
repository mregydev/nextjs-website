'use client';

import SDGS from '@/constants/SDGS';
import {
  Box, ChakraProvider, Tag, TagLabel, Tooltip,
} from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';

interface SDGViewerProps {
  sdgs :number[]
}
function SDGViewer({ sdgs }:SDGViewerProps) {
  return (
    <ChakraProvider>
      <Box mt={6}>
        <b> SDGS : </b>
        {sdgs.map((sdg) => (
          <Tooltip key={sdg} label={SDGS[sdg]}>
            <Tag
              mr={3}
              mb={4}
              width={85}
              key={uuidv4()}
              borderRadius="full"
              variant="solid"
              colorScheme="cyan"
            >
              <TagLabel>{SDGS[sdg]}</TagLabel>
            </Tag>
          </Tooltip>
        ))}
      </Box>
    </ChakraProvider>
  );
}

export default SDGViewer;
