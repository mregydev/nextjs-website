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
  import { useCallback, useEffect, useState } from 'react';
  
  import { ProjectFilterCritera } from '@/dtos/ProjectFilterCriteria';
  import { FormEvent } from 'react';
  import { useSearchParams } from 'next/navigation';
  
  export interface FilterProps {
    applyFilter: (criteria: ProjectFilterCritera) => void;
  }
  
  const Filter = ({ applyFilter }: FilterProps) => {
    const searchParams = useSearchParams();
    const [showError, setShowError] = useState(false);
    const [filterCriteria, setFilterCriteria] = useState<ProjectFilterCritera>({
      min_volume: parseInt(searchParams.get('min_volume') ?? '0'),
      max_volume: parseInt(searchParams.get('max_volume') ?? '0'),
      name: searchParams.get('name') ?? '',
    });
  
    const handleSubmit = useCallback(
      (event: FormEvent) => {
        event.preventDefault();
        applyFilter(filterCriteria);
      },
      [applyFilter, filterCriteria]
    );
  
    const handleUpdateFilterCriteria = useCallback(
      (prop: string, value: string | number) => {
        setFilterCriteria({ ...filterCriteria, [prop]: value });
      },
      [filterCriteria]
    );
  
    useEffect(() => {
      const { min_volume, max_volume } = filterCriteria;
      if (min_volume && min_volume > max_volume) {
        setShowError(true);
      } else {
        setShowError(false);
      }
    }, [filterCriteria]);
  
    const handleResetFilter = useCallback(() => {
      setFilterCriteria({ name: '', min_volume: 0, max_volume: 0 });
      applyFilter(filterCriteria);
    }, [applyFilter, filterCriteria]);
    return (
      <Stack spacing={2}>
        <Heading mt='6' size='md' textAlign='center'>
          Filter Section
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl mt={2}>
            <FormLabel>Name</FormLabel>
            <Input
              bg='white.900'
              type='text'
              value={filterCriteria.name}
              onChange={(event) =>
                handleUpdateFilterCriteria('name', event.target.value)
              }
            />
          </FormControl>
          <FormControl mt={2}>
            <FormLabel>Min - Volume</FormLabel>
            <Slider
              value={filterCriteria.min_volume}
              min={0}
              max={20000}
              aria-label='slider-ex-1'
              onChange={(data) => handleUpdateFilterCriteria('min_volume', data)}
              defaultValue={30}
            >
              <SliderTrack bg='gray.400'>
                <SliderFilledTrack />
              </SliderTrack>
              <Tooltip
                hasArrow
                bg='teal.500'
                color='white'
                placement='top'
                label={`${filterCriteria.min_volume}`}
              >
                <SliderThumb />
              </Tooltip>
            </Slider>
          </FormControl>
  
          <FormControl>
            <FormLabel>Max - Volume</FormLabel>
            <Slider
              value={filterCriteria.max_volume}
              min={0}
              max={20000}
              aria-label='slider-ex-1'
              onChange={(data) => handleUpdateFilterCriteria('max_volume', data)}
              defaultValue={30}
            >
              <SliderTrack bg='gray.400'>
                <SliderFilledTrack />
              </SliderTrack>
              <Tooltip
                hasArrow
                bg='teal.500'
                color='white'
                placement='top'
                label={`${filterCriteria.max_volume}`}
              >
                <SliderThumb />
              </Tooltip>
            </Slider>
          </FormControl>
          {showError && (
            <Alert status='error'>
              <AlertIcon />
              <AlertDescription>
                Min volume should be less than max{' '}
              </AlertDescription>
            </Alert>
          )}
  
          <Button
            isDisabled={showError}
            mt={4}
            mr={5}
            width='45%'
            type='submit'
            colorScheme='blue'
          >
            Search
          </Button>
          <Button
            mt={4}
            width='45%'
            type='submit'
            colorScheme='red'
            onClick={handleResetFilter}
          >
            Reset
          </Button>
        </form>
      </Stack>
    );
  };
  
  export default Filter;
  