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


export interface EditableTextProps
{
    type:string,
    value:string,
    label:string,
    onSubmit:(newValue:string)=>void,
    onChange:(newValue:string)=>void,
    isSaveButtonDisabled?:boolean
}
const EditableText = ({value,onChange,onSubmit,label,type,isSaveButtonDisabled}:EditableTextProps) => {

  const [inputValue, setInputValue] = useState(value);

  
  const EditableControls = () => {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent='center'  size='sm'>
        <IconButton
          isDisabled={isSaveButtonDisabled}
          aria-label='submit'
          icon={<CheckIcon />}
          {...getSubmitButtonProps()}
        />
        <IconButton
          aria-label='cancel'
          icon={<CloseIcon />}
          {...getCancelButtonProps()}
        />
      </ButtonGroup>
    ) : (
      <IconButton
        ml={2}
        aria-label='edit'
        size='sm'
        icon={<EditIcon />}
        {...getEditButtonProps()}
      />
    );
  };

  return (
    <Editable
      
      defaultValue={inputValue}
      isPreviewFocusable={false}
      onSubmit={()=>onSubmit(inputValue)}
      onChange={(value)=>onChange(value)}
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
};

export default EditableText;
