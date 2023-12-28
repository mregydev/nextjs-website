'use client';

import {
  FormEvent, useCallback, useEffect, useState,
} from 'react';

import {
  Alert,
  AlertDescription,
  AlertIcon,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react';

interface AddToCartProps {
  maxNumberOfVolumes: number;

  addToCartHandler: (numberOfVolumes: number) => void;
}

function AddToProject({
  maxNumberOfVolumes,
  addToCartHandler: addToCart,
}: AddToCartProps) {
  const [numberOfVolumes, setNumberOfVolumes] = useState(0);
  const [hasErrors, setHasErrors] = useState(false);

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      addToCart(numberOfVolumes);
    },
    [addToCart, numberOfVolumes],
  );

  useEffect(() => {
    if (numberOfVolumes > maxNumberOfVolumes) {
      setHasErrors(true);
    } else {
      setHasErrors(false);
    }
  }, [maxNumberOfVolumes, numberOfVolumes]);
  return (

    <Stack padding={5} display="flex" spacing={4}>
      <form onSubmit={handleSubmit}>
        <FormControl mt={2}>
          <FormLabel>
            Number of volumes ( should be less than
            {' '}
            {maxNumberOfVolumes}
            )
          </FormLabel>
          <Input
            bg="white.900"
            type="number"
            value={numberOfVolumes}
            onChange={(event) => setNumberOfVolumes(parseInt(event.target.value))}
          />
        </FormControl>
        {hasErrors && (
        <Alert mt="2" status="error">
          <AlertIcon />
          <AlertDescription>
            Number of volumes is bigger than max number offered which is
            {' '}
            {maxNumberOfVolumes}
          </AlertDescription>
        </Alert>
        )}

        <Stack align="center">
          <Button
            isDisabled={hasErrors || !numberOfVolumes}
            borderRadius="full"
            mt="4"
            width="80%"
            colorScheme="yellow"
            type="submit"
          >
            Add to Cart
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}

export default AddToProject;
