'use client';

import { useCallback, useEffect, useState } from 'react';
import NextLink from 'next/link';

import {
  Alert,
  AlertIcon,
  ChakraProvider,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import { StoredProject } from '@/dtos/StoredProject';
import { AddProjectToCart, isProjectAddedToCart } from '../../../utils';
import AddToCart from './AddToCart';

interface AddToCartContainerProps {
  projectName: string;
  projectId: number;
  maxNumberOfVolumes: number;
}
function AddToCartContainer({
  projectName,
  projectId,
  maxNumberOfVolumes,
}: AddToCartContainerProps) {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsAddedToCart(isProjectAddedToCart(projectId));
    setIsLoaded(true);
  }, [projectId]);

  const addToCartHandler = useCallback(
    (numberOfVolumes: number) => {
      const project: StoredProject = {
        id: projectId,
        max_volume: maxNumberOfVolumes,
        name: projectName,
        saved_volume: numberOfVolumes,
      };
      AddProjectToCart(project);
      setIsAddedToCart(true);
    },
    [maxNumberOfVolumes, projectId, projectName],
  );

  return (
    <ChakraProvider>
      {isAddedToCart ? (
        <Stack spacing={3} padding={5} fontWeight="bold" height={300}>
          <Alert textAlign="left" status="warning">
            <AlertIcon />
            <Text>
              Project is added to the cart , please check your
              {' '}
              <Link color="blue" href="/cart" as={NextLink}>
                cart
              </Link>
              {' '}
              page
            </Text>
          </Alert>
        </Stack>
      ) : (
        isLoaded && (
          <AddToCart
            maxNumberOfVolumes={maxNumberOfVolumes}
            addToCartHandler={addToCartHandler}
          />
        )
      )}
    </ChakraProvider>
  );
}
export default AddToCartContainer;
