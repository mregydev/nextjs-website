'use client';

import {
  Alert, AlertIcon, Box, SimpleGrid, Stack,
} from '@chakra-ui/react';
import { StoredProject } from '@/dtos/StoredProject';
import CartListItem from '../CartListItem';

interface CartListItemProps {
  cartProjects:StoredProject[],
  onUpdateItem:(projectId:number, newVolume:number)=>void,
  onRemoveItem:(projectId:number)=>void
}

function CartList({ onUpdateItem, onRemoveItem, cartProjects = [] }: CartListItemProps) {
  return (
    <>
      {!cartProjects.length && (
        <Stack spacing={3} padding={5} fontWeight="bold" height={300}>
          <Alert textAlign="left" status="warning">
            <AlertIcon />
            No projects added to cart
          </Alert>
        </Stack>
      )}
      <SimpleGrid columns={{ md: 3, sm: 1 }} spacing={4}>
        {cartProjects.map((project) => (
          <Box padding={5} borderRadius="xl" key={project.name}>
            <CartListItem
              onRemove={() => onRemoveItem(project.id)}
              onUpdate={(newVolume) => onUpdateItem(project.id, newVolume)}
              project={project}
            />
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
}
export default CartList;
