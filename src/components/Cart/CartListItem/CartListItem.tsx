import { StoredProject } from '@/dtos/StoredProject';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button,
  Text,
} from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import EditableText from '../../Common/EditableText';

interface CartListItemProps {
  project: StoredProject;
  onUpdate: (value: number) => void;
  onRemove: () => void;
}

function CartListItem({ project, onUpdate, onRemove }: CartListItemProps) {
  const [hasErrors, setHasErrors] = useState(false);

  const handleUpdate = useCallback(
    (newValue: string) => {
      if (!hasErrors) {
        onUpdate(parseInt(newValue));
      }
    },
    [hasErrors, onUpdate],
  );

  const handleChange = useCallback(
    (value: string) => {
      if (parseInt(value) > project.max_volume) {
        setHasErrors(true);
      } else {
        setHasErrors(false);
      }
    },
    [project.max_volume],
  );

  const handleRemove = useCallback(() => {
    onRemove();
  }, [onRemove]);
  return (
    <Box
      key={project.name}
      padding={5}
      boxShadow="xl"
      borderRadius="xl"
      bg="gray.200"
    >
      <Text>
        <b>Project Name </b>
        {' '}
        {project.name}
      </Text>
      <Text mt={2}>
        <b>Max number of volumes </b>
        {' '}
        {project.max_volume}
      </Text>
      <EditableText
        type="number"
        label="Selected number of volumes : "
        value={project.saved_volume.toString()}
        onSubmit={handleUpdate}
        onChange={handleChange}
        isSaveButtonDisabled={hasErrors}
      />
      {hasErrors && (
        <Alert mt={2} status="error">
          <AlertIcon />
          <AlertDescription>
            Volume should be less than
            {' '}
            {project.max_volume}
          </AlertDescription>
        </Alert>
      )}

      <Button mt={2} colorScheme="red" onClick={handleRemove}>
        Remove
      </Button>
    </Box>
  );
}

export default CartListItem;
