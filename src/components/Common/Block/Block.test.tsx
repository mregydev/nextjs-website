import { render } from '@testing-library/react';
import Block from '.';
import '@testing-library/jest-dom';

describe('Block test cases', () => {
  it('should render block children correctly', () => {
    const { getByText } = render(
      <Block>
        <span>test</span>
        <span>another</span>
      </Block>,
    );
    expect(getByText(/test/)).toBeInTheDocument();
  });
});
