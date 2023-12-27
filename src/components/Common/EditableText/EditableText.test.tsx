import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import EditableText, { EditableTextProps } from '.';

describe('EditableText component', () => {
  const renderEditableText = (props: EditableTextProps) =>
    render(<EditableText {...props}></EditableText>);

  const defaultProps = {
    type: 'text',
    value: 'Initial Value',
    label: 'Test Label',
    onSubmit: () => {},
    onChange: () => {},
  };

  it('renders with initial values', () => {
    const { getByText, getByLabelText } = renderEditableText(defaultProps);

    expect(getByText(/test Label/i)).toBeInTheDocument();
    expect(getByLabelText(/edit/i)).toBeInTheDocument();
  });

  it('allows editing and submitting values', async () => {
    const onSubmitSpy = jest.fn();
    const onChangeSpy = jest.fn();

    const { getByLabelText, getByText } = renderEditableText({
      ...defaultProps,
      onSubmit: onSubmitSpy,
      onChange: onChangeSpy,
    });

    fireEvent.click(getByLabelText(/edit/i));

    fireEvent.change(getByLabelText(/test Label/i), {
      target: { value: 'New Value' },
    });

    fireEvent.click(getByLabelText(/submit/i));

    await waitFor(() => {
      expect(onChangeSpy).toHaveBeenCalledWith('New Value');
      expect(onSubmitSpy).toHaveBeenCalledWith('New Value');
      expect(getByText('New Value')).toBeInTheDocument();
    });
  });

  it('disables save button when specified', () => {
    const { getByLabelText } = renderEditableText({
      ...defaultProps,
      isSaveButtonDisabled: true,
    });

    fireEvent.click(getByLabelText(/edit/i));

    fireEvent.change(getByLabelText(/test Label/i), {
        target: { value: 'New Value' },
      });

    expect(getByLabelText(/submit/i)).toBeDisabled();
  });
});
