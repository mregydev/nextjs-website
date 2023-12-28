'use client';

import { useCallback, useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { StoredProject } from '@/dtos/StoredProject';
import CartList from './CartList';
import {
  getAllProjects,
  removeProjectFromCart,
  updateNumberOfVolumes,
} from '../../../utils';

function CartListContainer() {
  const [cartProjects, setCartProjects] = useState<StoredProject[]>([]);
  const [isItemRemoved, setItemRemoved] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setCartProjects(getAllProjects());
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isItemRemoved) {
      setCartProjects(getAllProjects());
      setItemRemoved(false);
    }
  }, [isItemRemoved]);

  const handleRemove = useCallback((projectId: number) => {
    removeProjectFromCart(projectId);
    setItemRemoved(true);
  }, []);

  return (
    <ChakraProvider>
      {isLoaded && (
        <CartList
          cartProjects={cartProjects}
          onUpdateItem={(projectId, numVolumes) => {
            updateNumberOfVolumes(numVolumes, projectId);
          }}
          onRemoveItem={handleRemove}
        />
      )}
    </ChakraProvider>
  );
}

export default CartListContainer;
