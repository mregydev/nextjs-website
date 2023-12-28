import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';
import {
  ButtonGroup,
  Editable,
  EditableInput,
  EditablePreview,
  IconButton,
  Input,
  useEditableControls,
} from '@chakra-ui/react';
import { useState } from 'react';

const EditableControls = () => {
  const {
    isEditing,
    getSubmitButtonProps,
    getCancelButtonProps,
    getEditButtonProps,
  } = useEditableControls();

  return isEditing ? (
    <ButtonGroup justifyContent="center" size="sm">
      <IconButton
        aria-label="submit"
        icon={<CheckIcon />}
        {...getSubmitButtonProps()}
      />
      <IconButton
        aria-label="cancel"
        icon={<CloseIcon />}
        {...getCancelButtonProps()}
      />
    </ButtonGroup>
  ) : (
    <IconButton
      ml={2}
      aria-label="edit"
      size="sm"
      icon={<EditIcon />}
      {...getEditButtonProps()}
    />
  );
};

export interface EditableTextProps {
  type:string,
  value:string,
  label:string,
  onSubmit:(newValue:string)=>void,

}
function EditableText({
  value, onSubmit, label, type,
}:EditableTextProps) {
  const [inputValue, setInputValue] = useState(value);

  return (
    <Editable
      defaultValue={inputValue}
      isPreviewFocusable={false}
      onSubmit={() => onSubmit(inputValue)}
    >
      <b>{label}</b>
      <EditablePreview />
      <Input
        aria-label={label}
        type={type}
        onChange={(event) => setInputValue(event.target.value)}
        as={EditableInput}
      />
      <EditableControls />
    </Editable>
  );
}

export default EditableText;
