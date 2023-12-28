import {
  Alert,
  AlertDescription,
  AlertIcon,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Tooltip,
} from '@chakra-ui/react';
import {
  useCallback, useEffect, useState, FormEvent,
} from 'react';

import { ProjectFilterCritera } from '@/dtos/ProjectFilterCriteria';
import { useSearchParams } from 'next/navigation';

export interface FilterProps {
  applyFilter: (criteria: ProjectFilterCritera) => void;
}

function Filter({ applyFilter }: FilterProps) {
  const searchParams = useSearchParams();
  const [showError, setShowError] = useState(false);
  const [filterCriteria, setFilterCriteria] = useState<ProjectFilterCritera>({
    minVolume: parseInt(searchParams.get('minVolume') ?? '0'),
    maxVolume: parseInt(searchParams.get('maxVolume') ?? '0'),
    name: searchParams.get('name') ?? '',
  });

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      applyFilter(filterCriteria);
    },
    [applyFilter, filterCriteria],
  );

  const handleUpdateFilterCriteria = useCallback(
    (prop: string, value: string | number) => {
      setFilterCriteria({ ...filterCriteria, [prop]: value });
    },
    [filterCriteria],
  );

  useEffect(() => {
    const { minVolume, maxVolume } = filterCriteria;
    if (minVolume && minVolume > maxVolume) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  }, [filterCriteria]);

  const handleResetFilter = useCallback(() => {
    setFilterCriteria({ name: '', minVolume: 0, maxVolume: 0 });
    applyFilter(filterCriteria);
  }, [applyFilter, filterCriteria]);
  return (
    <Stack spacing={2}>
      <Heading mt="6" size="md" textAlign="center">
        Filter Section
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl mt={2}>
          <FormLabel>Name</FormLabel>
          <Input
            bg="white.900"
            type="text"
            value={filterCriteria.name}
            onChange={(event) => handleUpdateFilterCriteria('name', event.target.value)}
          />
        </FormControl>
        <FormControl mt={2}>
          <FormLabel>Min - Volume</FormLabel>
          <Slider
            value={filterCriteria.minVolume}
            min={0}
            max={20000}
            aria-label="slider-ex-1"
            onChange={(data) => handleUpdateFilterCriteria('minVolume', data)}
            defaultValue={30}
          >
            <SliderTrack bg="gray.400">
              <SliderFilledTrack />
            </SliderTrack>
            <Tooltip
              hasArrow
              bg="teal.500"
              color="white"
              placement="top"
              label={`${filterCriteria.minVolume}`}
            >
              <SliderThumb />
            </Tooltip>
          </Slider>
        </FormControl>

        <FormControl>
          <FormLabel>Max - Volume</FormLabel>
          <Slider
            value={filterCriteria.maxVolume}
            min={0}
            max={20000}
            aria-label="slider-ex-1"
            onChange={(data) => handleUpdateFilterCriteria('maxVolume', data)}
            defaultValue={30}
          >
            <SliderTrack bg="gray.400">
              <SliderFilledTrack />
            </SliderTrack>
            <Tooltip
              hasArrow
              bg="teal.500"
              color="white"
              placement="top"
              label={`${filterCriteria.maxVolume}`}
            >
              <SliderThumb />
            </Tooltip>
          </Slider>
        </FormControl>
        {showError && (
        <Alert status="error">
          <AlertIcon />
          <AlertDescription>
            Min volume should be less than max
            {' '}
          </AlertDescription>
        </Alert>
        )}

        <Button
          isDisabled={showError}
          mt={4}
          mr={5}
          width="45%"
          type="submit"
          colorScheme="blue"
        >
          Search
        </Button>
        <Button
          mt={4}
          width="45%"
          type="submit"
          colorScheme="red"
          onClick={handleResetFilter}
        >
          Reset
        </Button>
      </form>
    </Stack>
  );
}

export default Filter;
