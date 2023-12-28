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
import { v4 as uuidv4 } from 'uuid';
import EditableText from '../../Common/EditableText';

export interface CartListItemProps {
  project: StoredProject;
  onUpdate: (value: number) => void;
  onRemove: () => void;
}

function CartListItem({ project, onUpdate, onRemove }: CartListItemProps) {
  const [hasErrors, setHasErrors] = useState(false);
  const [numberOfVolumes, setNumberOfVolumes] = useState(project.savedVolume.toString());

  const handleUpdate = useCallback(
    (newValue: string) => {
      if (parseInt(newValue) > project.maxVolume) {
        setHasErrors(true);
      } else {
        setHasErrors(false);
        onUpdate(parseInt(newValue));
        setNumberOfVolumes(newValue);
      }
    },
    [onUpdate, project.maxVolume],
  );

  const handleRemove = useCallback(() => {
    onRemove();
  }, [onRemove]);
  return (
    <Box
      key={uuidv4()}
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
        {project.maxVolume}
      </Text>
      <EditableText
        type="number"
        label="Selected number of volumes : "
        value={numberOfVolumes}
        onSubmit={handleUpdate}
      />
      {hasErrors && (
        <Alert mt={2} status="error">
          <AlertIcon />
          <AlertDescription>
            Volume should be less than
            {' '}
            {project.maxVolume}
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
