'use client';

import { useCallback } from 'react';
import { ProjectFilterCritera } from '@/dtos/ProjectFilterCriteria';
import { useRouter } from 'next/navigation';
import { Box, ChakraProvider } from '@chakra-ui/react';
import Filter from './Filter';

function FilterContainer() {
  const router = useRouter();

  const applyFilter = useCallback(
    (filterCrtiera: ProjectFilterCritera) => {
      const params = new URLSearchParams();
      if (filterCrtiera.name) {
        params.append('name', filterCrtiera.name);
      }
      if (filterCrtiera.minVolume) {
        params.append('minVolume', filterCrtiera.minVolume.toString());
      }

      if (filterCrtiera.maxVolume) {
        params.append('maxVolume', filterCrtiera.maxVolume.toString());
      }

      const queryString = params.toString();

      router.push(`/projects?${queryString}`);
    },
    [router],
  );

  return (
    <ChakraProvider>
      <Box padding={4}>
        <Filter applyFilter={applyFilter} />
      </Box>
    </ChakraProvider>
  );
}

export default FilterContainer;
