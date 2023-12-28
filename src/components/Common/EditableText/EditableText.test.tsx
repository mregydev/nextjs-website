import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import EditableText, { EditableTextProps } from '.';

describe('EditableText component', () => {
  const renderEditableText = (props: EditableTextProps) => render(<EditableText {...props} />);

  const defaultProps = {
    type: 'text',
    value: 'Initial Value',
    label: 'Test Label',
    onSubmit: () => {},
    isSaveButtonDisabled: false,
  };

  it('renders with initial values', () => {
    const { getByText, getByLabelText } = renderEditableText(defaultProps);

    expect(getByText(/test Label/i)).toBeInTheDocument();
    expect(getByLabelText(/edit/i)).toBeInTheDocument();
  });

  it('Call onSubmit when accept button clicked', async () => {
    const onSubmitSpy = jest.fn();

    const { getByLabelText, getByText } = renderEditableText({
      ...defaultProps,
      onSubmit: onSubmitSpy,
    });

    fireEvent.click(getByLabelText(/edit/i));

    fireEvent.change(getByLabelText(/test Label/i), {
      target: { value: 'New Value' },
    });

    fireEvent.click(getByLabelText(/submit/i));

    await waitFor(() => {
      expect(onSubmitSpy).toHaveBeenCalledWith('New Value');
      expect(getByText('New Value')).toBeInTheDocument();
    });
  });
});
