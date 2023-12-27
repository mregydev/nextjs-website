'use client';

import { useCallback } from 'react';
import Filter from './Filter';
import { ProjectFilterCritera } from '@/dtos/ProjectFilterCriteria';
import { useRouter } from 'next/navigation';
import { Box, ChakraProvider } from '@chakra-ui/react';

const FilterContainer = () => {
  const router = useRouter();

  const applyFilter = useCallback(
    (filterCrtiera: ProjectFilterCritera) => {
      const params = new URLSearchParams();
      if (filterCrtiera.name) {
        params.append('name', filterCrtiera.name);
      }
      if (filterCrtiera.min_volume) {
        params.append('min_volume', filterCrtiera.min_volume.toString());
      }

      if (filterCrtiera.max_volume) {
        params.append('max_volume', filterCrtiera.max_volume.toString());
      }

      const queryString = params.toString();

      router.push(`/projects?${queryString}`);
    },
    [router]
  );

  return (
    <ChakraProvider>
      <Box padding={4}>
        <Filter applyFilter={applyFilter}></Filter>
      </Box>
    </ChakraProvider>
  );
};

export default FilterContainer;
