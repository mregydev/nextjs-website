import { render, screen, fireEvent } from '@testing-library/react';
import CartListItem, { CartListItemProps } from './CartListItem';

describe('CartListItem', () => {
  const project = {
    id: 1,
    name: 'Test Project',
    maxVolume: 10,
    savedVolume: 5,
  };

  const defaultProps: CartListItemProps = {
    project,
    onUpdate: jest.fn(),
    onRemove: jest.fn(),
  };

  const renderCardListItem = (props: CartListItemProps) => render(<CartListItem {...props} />);

  it('renders CartListItem component', () => {
    renderCardListItem(defaultProps);

    expect(screen.getByText(/project name/i)).toBeInTheDocument();
    expect(screen.getByText(/max number of volumes/i)).toBeInTheDocument();
    expect(screen.getByText(/remove/i)).toBeInTheDocument();
  });

  it('handles volume update correctly', () => {
    const onUpdateSpy = jest.fn();
    const { getByTestId, getByLabelText } = renderCardListItem({
      ...defaultProps,
      onUpdate: onUpdateSpy,
    });
    const input = getByTestId('editableText');
    fireEvent.click(getByLabelText(/edit/i));
    fireEvent.change(input, { target: { value: '8' } });
    fireEvent.click(getByLabelText(/submit/i));
    expect(onUpdateSpy).toHaveBeenCalled();
  });
});
